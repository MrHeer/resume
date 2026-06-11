import { useState, useMemo } from "react"
import {
  useHotkey,
  useHotkeys,
  useHotkeySequences,
} from "@tanstack/react-hotkeys"
import type {
  RegisterableHotkey,
  HotkeySequence,
} from "@tanstack/react-hotkeys"
import { CommandDialog } from "@/components/ui/command"
import { CommandPaletteContext, useCommandPalette } from "./context"
import { useCommandActions } from "./actions"
import { CommandPaletteContent } from "./content"
import type { CommandPaletteContextValue, CommandAction } from "./types"

export { useCommandPalette }

function useOpenHotkeys(actions: CommandAction[], open: boolean) {
  const singleKeyDefs = useMemo(
    () =>
      actions
        .filter(
          (
            it
          ): it is CommandAction & { shortcut: string[]; action: () => void } =>
            Boolean(it.shortcut && it.shortcut.length === 1 && it.action)
        )
        .map((it) => ({
          hotkey: it.shortcut[0] as RegisterableHotkey,
          callback: it.action,
        })),
    [actions]
  )

  useHotkeys(singleKeyDefs, { enabled: open })

  const sequenceDefs = useMemo(
    () =>
      actions
        .filter(
          (
            it
          ): it is CommandAction & { shortcut: string[]; action: () => void } =>
            Boolean(it.shortcut && it.shortcut.length > 1 && it.action)
        )
        .map((it) => ({
          sequence: it.shortcut as HotkeySequence,
          callback: it.action,
        })),
    [actions]
  )

  useHotkeySequences(sequenceDefs, { enabled: open })
}

export function CommandPalette({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const actions = useCommandActions()

  useHotkey("Mod+K", () => setOpen((prev) => !prev))

  useOpenHotkeys(actions, open === false)

  const ctxValue = useMemo<CommandPaletteContextValue>(
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }),
    []
  )

  return (
    <CommandPaletteContext.Provider value={ctxValue}>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandPaletteContent actions={actions} />
      </CommandDialog>
      {children}
    </CommandPaletteContext.Provider>
  )
}
