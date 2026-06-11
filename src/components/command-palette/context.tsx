import { createContext, useContext } from "react"
import type { CommandPaletteContextValue } from "./types"

export const CommandPaletteContext =
  createContext<CommandPaletteContextValue | null>(null)

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext)
  if (!ctx) {
    throw new Error("useCommandPalette must be used within <CommandPalette>")
  }
  return ctx
}
