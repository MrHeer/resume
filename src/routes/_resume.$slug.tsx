import { createFileRoute, redirect } from "@tanstack/react-router"
import { Markdown } from "@/components/markdown"
import { renderMarkdownServer } from "@/lib/markdown-server"
import { allResumes } from "content-collections"

export const Route = createFileRoute("/_resume/$slug")({
  loader: async ({ params }) => {
    const resume = allResumes.find((it) => it.slug === params.slug)
    if (!resume) {
      throw redirect({ to: "/" })
    }
    // Static server function: rendered at build time, cached as static JSON.
    // Client navigations fetch only the target language's cached JSON file.
    const rendered = await renderMarkdownServer({
      data: { content: resume.content },
    })
    return { ...resume, rendered }
  },
  head: ({ loaderData }) => {
    if (loaderData) {
      return {
        meta: [
          {
            title: loaderData.title,
          },
          {
            name: "description",
            content: loaderData.description,
          },
        ],
      }
    }
    return {}
  },
  component: Resume,
})

function Resume() {
  const resume = Route.useLoaderData()

  return (
    <article>
      <Markdown result={resume.rendered} className="markdown-body" />
    </article>
  )
}
