import { createFileRoute, Outlet } from "@tanstack/react-router"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Header } from "@/components/header"
import { CommandPalette } from "@/components/command-palette"

export const Route = createFileRoute("/_resume")({
  component: Layout,
})

function Layout() {
  return (
    <CommandPalette>
      <main className="h-dvh">
        <ScrollArea className="size-full">
          <Header />
          <Outlet />
        </ScrollArea>
      </main>
    </CommandPalette>
  )
}
