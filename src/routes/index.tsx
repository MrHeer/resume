import { fallbackSlug } from "@/lib/config"
import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$slug", params: { slug: fallbackSlug } })
  },
})
