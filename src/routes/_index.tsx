import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { ScrollArea } from "@/components/ui/scroll-area"

export const Route = createFileRoute("/_index")({
  beforeLoad: () => {
    redirect({ to: "/$slug", params: { slug: "zh-CN" } })
  },
  component: Index,
})

function Index() {
  return (
    <main className="h-screen">
      <ScrollArea className="size-full">
        <header>Header Placeholder</header>
        <Outlet />
      </ScrollArea>
    </main>
  )
}
