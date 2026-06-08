import { createFileRoute, redirect } from "@tanstack/react-router"
import { Markdown } from "@/components/markdown"
import { renderMarkdown } from "@/lib/markdown"
import { allResumes } from "content-collections"

export const Route = createFileRoute("/_resume/$slug")({
  loader: async ({ params }) => {
    const resume = allResumes.find((it) => it.slug === params.slug)
    if (!resume) {
      throw redirect({ to: "/" })
    }
    const rendered = await renderMarkdown(resume.content)
    return { ...resume, rendered }
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
