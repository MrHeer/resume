import { defineCollection, defineConfig } from "@content-collections/core"
import { z } from "zod"
import matter from "gray-matter"

function extractFrontMatter(content: string) {
  const { data, content: body, excerpt } = matter(content, { excerpt: true })
  return { data, body, excerpt: excerpt || "" }
}

const resumes = defineCollection({
  name: "resumes",
  directory: "./resume",
  include: "*.md",
  schema: z.object({
    content: z.string(),
  }),
  transform: ({ content, ...resume }) => {
    const frontMatter = extractFrontMatter(content)

    // Extract header image (first image in the document)
    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/)
    const headerImage = headerImageMatch ? headerImageMatch[2] : undefined

    return {
      ...resume,
      slug: resume._meta.path,
      title: frontMatter.data.title,
      excerpt: frontMatter.excerpt,
      description: frontMatter.data.description,
      headerImage,
      content: frontMatter.body,
    }
  },
})

export default defineConfig({
  content: [resumes],
})
