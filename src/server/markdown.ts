import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeRaw from "rehype-raw"
import rehypeShiki from "@shikijs/rehype"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import twemoji from "twemoji"
import { createServerFn } from "@tanstack/react-start"
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions"
import { toString } from "hast-util-to-string"
import { unified } from "unified"
import { visit } from "unist-util-visit"

type MarkdownHeading = {
  id: string
  text: string
  level: number
}

export type MarkdownResult = {
  markup: string
  headings: Array<MarkdownHeading>
}

const TWEEMOJI_CDN = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/"

/**
 * Replaces twemoji CDN image URLs with inline SVG data URIs.
 * Fetches each unique SVG once at build time, eliminating 25+ external
 * requests at page load.
 */
async function inlineTwemojiSvgs(html: string): Promise<string> {
  const svgBase = `${TWEEMOJI_CDN}svg/`
  const escaped = svgBase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const re = new RegExp(escaped + '([a-z0-9-]+)\\.svg', 'g')

  // Collect unique codepoints
  const codepoints = new Set<string>()
  for (const [, cp] of html.matchAll(re)) {
    if (cp) codepoints.add(cp)
  }
  if (codepoints.size === 0) return html

  // Fetch SVGs in parallel
  const cache = new Map<string, string>()
  const results = await Promise.all(
    Array.from(codepoints).map(async (cp) => {
      try {
        const res = await fetch(`${svgBase}${cp}.svg`)
        if (res.ok) return [cp, await res.text()] as const
      } catch { /* fall back to CDN URL */ }
      return [cp, null] as const
    })
  )
  for (const [cp, svg] of results) {
    if (svg) cache.set(cp, `data:image/svg+xml,${encodeURIComponent(svg)}`)
  }
  if (cache.size === 0) return html

  return html.replace(re, (full, cp: string) => {
    const dataUri = cache.get(cp)
    return dataUri ? full.replace(`${svgBase}${cp}.svg`, dataUri) : full
  })
}

async function _renderMarkdown(content: string): Promise<MarkdownResult> {
  const headings: Array<MarkdownHeading> = []

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeShiki, {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: "light-dark()",
    })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["anchor"] },
    })
    .use(() => (tree: any) => {
      visit(tree, "element", (node: any) => {
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)) {
          headings.push({
            id: node.properties?.id || "",
            text: toString(node),
            level: parseInt(node.tagName.charAt(1), 10),
          })
        }
      })
    })
    .use(rehypeStringify)
    .process(content)

  const html = twemoji.parse(String(result), {
    base: TWEEMOJI_CDN,
    folder: "svg",
    ext: ".svg",
    className: "emoji",
  })

  // Inline emoji SVGs to eliminate 25+ CDN requests at page load
  const inlined = await inlineTwemojiSvgs(html)

  return {
    markup: inlined,
    headings,
  }
}

export const renderMarkdown = createServerFn({ method: "POST" })
  .middleware([staticFunctionMiddleware])
  .validator((data: { content: string }) => data)
  .handler(async ({ data }): Promise<MarkdownResult> => {
    return _renderMarkdown(data.content)
  })
