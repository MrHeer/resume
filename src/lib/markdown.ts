import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeShiki from "@shikijs/rehype"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeStringify from "rehype-stringify"
import { visit } from "unist-util-visit"
import { toString } from "hast-util-to-string"
import twemoji from "twemoji"

export type MarkdownHeading = {
  id: string
  text: string
  level: number
}

export type MarkdownResult = {
  markup: string
  headings: Array<MarkdownHeading>
}

export async function renderMarkdown(content: string): Promise<MarkdownResult> {
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
