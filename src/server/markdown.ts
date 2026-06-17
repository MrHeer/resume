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
    base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
    folder: "svg",
    ext: ".svg",
    className: "emoji",
  })

  return {
    markup: html,
    headings,
  }
}

/**
 * Server function that renders markdown content.
 * Uses staticFunctionMiddleware to cache the result as a static JSON file
 * during build-time prerendering.
 *
 * This way:
 * - Each language's rendered HTML is a separate static JSON file
 * - Client only fetches the file for the language they switch to
 * - No heavy Shiki/unified deps in client bundle
 */
export const renderMarkdown = createServerFn({ method: "POST" })
  .middleware([staticFunctionMiddleware])
  .validator((data: { content: string }) => data)
  .handler(async ({ data }): Promise<MarkdownResult> => {
    return _renderMarkdown(data.content)
  })
