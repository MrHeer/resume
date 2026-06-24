import { createFileRoute, redirect } from "@tanstack/react-router"
import { Markdown } from "@/components/markdown"
import { renderMarkdown } from "@/server/markdown"
import { allResumes } from "content-collections"
import { fallbackSlug, personalInfo } from "@/lib/config"
import { translations } from "@/lib/translations"
import type { LanguageSlug } from "@/lib/config"

export const Route = createFileRoute("/_resume/$slug")({
  beforeLoad: ({ params }) => {
    const resume = allResumes.find((it) => it.slug === params.slug)
    if (!resume) {
      throw redirect({ to: "/$slug", params: { slug: fallbackSlug } })
    }
    return { resume }
  },
  loader: async ({ context: { resume } }) => {
    const { content, ...meta } = resume
    const rendered = await renderMarkdown({
      data: { content },
    })
    return { ...meta, rendered }
  },
  head: ({ loaderData }) => {
    if (loaderData) {
      const pageUrl = `${import.meta.env.BASE_URL}${loaderData.slug}`
      const locale = loaderData.slug as LanguageSlug
      const t = translations[locale]
      const sameAs = [
        personalInfo.github
          ? `https://github.com/${personalInfo.github}`
          : null,
        personalInfo.x ? `https://x.com/${personalInfo.x}` : null,
      ].filter(Boolean) as string[]
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: `${t.personal.firstName} ${t.personal.lastName}`,
        jobTitle: t.personal.jobTitle,
        url: pageUrl,
        sameAs,
        ...(personalInfo.email
          ? { email: `mailto:${personalInfo.email}` }
          : {}),
        ...(personalInfo.phone ? { telephone: personalInfo.phone } : {}),
      }

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
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd),
          },
        ],
      }
    }
    return {}
  },
  component: Resume,
})

function Resume() {
  const { rendered } = Route.useLoaderData()

  return (
    <article>
      <Markdown result={rendered} className="markdown-body" />
    </article>
  )
}
