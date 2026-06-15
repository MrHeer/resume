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
    title: z.string(),
    description: z.string(),
    content: z.string(),
  }),
  transform: ({ title, description, content, ...resume }) => {
    const frontMatter = extractFrontMatter(content)

    // Extract header image (first image in the document)
    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/)
    const headerImage = headerImageMatch ? headerImageMatch[2] : undefined

    return {
      ...resume,
      slug: resume._meta.path,
      title,
      excerpt: frontMatter.excerpt,
      description,
      headerImage,
      content: frontMatter.body,
    }
  },
})

export default defineConfig({
  content: [resumes],
})
