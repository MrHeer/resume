import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ "http-equiv": "refresh", content: "0;url=/zh-CN" }],
    links: [{ rel: "canonical", href: "/zh-CN" }],
  }),
})
