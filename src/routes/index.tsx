import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ httpEquiv: "refresh", content: "0;url=/zh-CN" }],
    links: [{ rel: "canonical", href: "/zh-CN" }],
  }),
})
