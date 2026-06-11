export interface CommandAction {
  id: string
  label: string
  icon: React.ReactNode
  keywords: string[]
  shortcut?: string[]
  section: string
  page?: string
  nextPage?: string
  action?: () => void
}

export interface CommandPaletteContextValue {
  open: () => void
  close: () => void
}
