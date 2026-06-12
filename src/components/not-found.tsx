import { FileXIcon } from "lucide-react"

import { useTranslation } from "@/hooks/use-local"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty"

export function NotFound() {
  const t = useTranslation()

  return (
    <main className="container mx-auto p-4 pt-16">
      <Empty>
        <EmptyMedia variant="icon">
          <FileXIcon />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>{t.notFound.title}</EmptyTitle>
          <EmptyDescription>{t.notFound.description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent />
      </Empty>
    </main>
  )
}
