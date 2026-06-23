import { useMemo } from "react"
import { createFileRoute, redirect } from "@tanstack/react-router"
import { Markdown } from "@/components/markdown"
import { renderMarkdown } from "@/server/markdown"
import { allResumes } from "content-collections"

import { usePersonalInfo } from "@/hooks/use-personal-info"
import { useLocal } from "@/hooks/use-local"

export const Route = createFileRoute("/_resume/$slug")({
  loader: async ({ params }) => {
    const resume = allResumes.find((it) => it.slug === params.slug)
    if (!resume) {
      throw redirect({ to: "/" })
    }
    const rendered = await renderMarkdown({
      data: { content: resume.content },
    })
    return { ...resume, rendered }
  },
  head: ({ loaderData }) => {
    if (loaderData) {
      const pageUrl = `${import.meta.env.BASE_URL}${loaderData.slug}`
      return {
        meta: [
          { title: loaderData.title },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
          { property: "og:type", content: "profile" },
          { property: "og:url", content: pageUrl },
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: loaderData.title },
          { name: "twitter:description", content: loaderData.description },
        ],
        links: [{ rel: "canonical", href: pageUrl }],
      }
    }
    return {}
  },
  component: Resume,
})

function Resume() {
  const resume = Route.useLoaderData()
  const info = usePersonalInfo()
  const { slug } = useLocal()

  const jsonLd = useMemo(() => {
    const sameAs = [
      info.github ? `https://github.com/${info.github}` : null,
      info.x ? `https://x.com/${info.x}` : null,
    ].filter(Boolean) as string[]

    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: `${info.firstName} ${info.lastName}`,
      jobTitle: info.jobTitle,
      url: `${import.meta.env.BASE_URL}${slug}`,
      sameAs,
      ...(info.email ? { email: `mailto:${info.email}` } : {}),
      ...(info.phone ? { telephone: info.phone } : {}),
    }
  }, [info, slug])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <Markdown result={resume.rendered} className="markdown-body" />
      </article>
    </>
  )
}
