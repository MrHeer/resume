import { defineCollection, defineConfig } from "@content-collections/core"
import { z } from "zod"

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
    return {
      ...resume,
      slug: resume._meta.path,
      title,
      description,
      content,
    }
  },
})

export default defineConfig({
  content: [resumes],
})
