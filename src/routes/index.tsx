import { fallbackLanguage } from "@/lib/config"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ httpEquiv: "refresh", content: `0;url=/${fallbackLanguage}` }],
    links: [{ rel: "canonical", href: `/${fallbackLanguage}` }],
  }),
})
