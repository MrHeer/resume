import { useState, useMemo, useCallback } from "react"
import { ArrowLeftIcon, SearchXIcon } from "lucide-react"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty"
import { Kbd } from "@/components/ui/kbd"
import type { CommandAction } from "./types"
import { groupBy } from "@/lib/utils"
import { useCommandPalette } from "./context"
import { useTranslation } from "@/hooks/use-translation"

export function CommandPaletteContent({
  actions,
}: {
  actions: CommandAction[]
}) {
  const t = useTranslation()
  const ui = t.palette.ui
  const { close } = useCommandPalette()
  const [search, setSearch] = useState("")
  const [pages, setPages] = useState<string[]>([])
  const page = pages[pages.length - 1]

  // When searching, show ALL terminal actions (no nextPage) across all pages.
  // When not searching, show only actions belonging to the current page.
  const actionsForFilter = useMemo(
    () =>
      search
        ? actions.filter((it) => !it.nextPage)
        : actions.filter((it) => it.page === page),
    [actions, page, search]
  )

  const grouped = useMemo(
    () => groupBy(actionsForFilter, (a) => a.section),
    [actionsForFilter]
  )

  const goBack = useCallback(
    () => setPages((prevPages) => prevPages.slice(0, -1)),
    []
  )

  return (
    <Command
      onKeyDown={(e) => {
        // Escape goes to previous page
        // Backspace goes to previous page when search is empty
        if (
          (e.key === "Escape" && page) ||
          (e.key === "Backspace" && !search)
        ) {
          e.stopPropagation()
          e.preventDefault()
          goBack()
        }
      }}
    >
      <CommandInput
        placeholder={ui.searchPlaceholder}
        value={search}
        onValueChange={setSearch}
      />
      <CommandList className="max-h-96">
        <CommandEmpty>
          <Empty>
            <EmptyMedia variant="icon">
              <SearchXIcon />
            </EmptyMedia>
            <EmptyHeader>
              <EmptyTitle>{ui.noResults}</EmptyTitle>
              <EmptyDescription>{ui.noResultsHint}</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CommandEmpty>

        {page && !search && (
          <CommandGroup>
            <CommandItem value="__back" onSelect={goBack}>
              <ArrowLeftIcon />
              <span>{ui.back}</span>
            </CommandItem>
          </CommandGroup>
        )}

        {Object.entries(grouped).map(([section, items]) => (
          <CommandGroup key={section} heading={section}>
            {items.map((it) => (
              <CommandItem
                key={it.id}
                value={it.id}
                keywords={it.keywords}
                onSelect={
                  it.nextPage
                    ? () =>
                        setPages((prevPages) => [
                          ...prevPages,
                          it.nextPage as string,
                        ])
                    : () => {
                        close()
                        it.action?.()
                      }
                }
              >
                {it.icon}
                <span>{it.label}</span>
                {it.shortcut && (
                  <CommandShortcut className="flex gap-1">
                    {it.shortcut.map((key, index) => (
                      <Kbd key={`${key}-${index}`}>{key.toUpperCase()}</Kbd>
                    ))}
                  </CommandShortcut>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}
