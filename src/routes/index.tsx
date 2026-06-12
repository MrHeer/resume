import { fallbackSlug } from "@/lib/config"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ httpEquiv: "refresh", content: `0;url=/${fallbackSlug}` }],
    links: [{ rel: "canonical", href: `/${fallbackSlug}` }],
  }),
})
