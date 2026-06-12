import { Component } from "react"
import { TriangleAlertIcon } from "lucide-react"

import { useTranslation } from "@/hooks/use-local"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty"

function ErrorFallback() {
  const t = useTranslation()

  return (
    <main className="container mx-auto p-4 pt-16">
      <Empty>
        <EmptyMedia variant="icon">
          <TriangleAlertIcon />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>{t.error.title}</EmptyTitle>
          <EmptyDescription>{t.error.description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent />
      </Empty>
    </main>
  )
}

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (this.state.error) {
      return this.props.fallback ?? <ErrorFallback />
    }

    return this.props.children
  }
}
