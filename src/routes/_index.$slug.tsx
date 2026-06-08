import { createFileRoute, notFound } from "@tanstack/react-router"
import { Markdown } from "@/components/markdown"
import { allResumes } from "content-collections"

export const Route = createFileRoute("/_index/$slug")({
  loader: ({ params }) => {
    const resume = allResumes.find((it) => it.slug === params.slug)
    if (!resume) {
      throw notFound()
    }
    return resume
  },
  component: Resume,
})

function Resume() {
  const resume = Route.useLoaderData()

  return (
    <article>
      <Markdown content={resume.content} className="markdown-body" />
    </article>
  )
}
