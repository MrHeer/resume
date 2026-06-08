import { createFileRoute, Outlet } from "@tanstack/react-router"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Header } from "@/components/header"

export const Route = createFileRoute("/_resume")({
  component: Layout,
})

function Layout() {
  return (
    <main className="h-screen">
      <Header />
      <ScrollArea className="size-full">
        <Outlet />
      </ScrollArea>
    </main>
  )
}
