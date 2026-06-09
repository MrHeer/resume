import { createFileRoute, Outlet } from "@tanstack/react-router"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Header } from "@/components/header"

export const Route = createFileRoute("/_resume")({
  component: Layout,
})

function Layout() {
  return (
    <main className="h-screen">
      <ScrollArea className="size-full">
        <Header />
        <Outlet />
      </ScrollArea>
    </main>
  )
}
