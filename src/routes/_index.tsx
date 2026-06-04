import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_index")({
  beforeLoad: () => {
    redirect({ to: "/$slug", params: { slug: "zh-CN" } })
  },
  component: Index,
})

function Index() {
  return (
    <main>
      <header>Header Placeholder</header>
      <Outlet />
    </main>
  )
}
