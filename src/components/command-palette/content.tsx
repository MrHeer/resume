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

export function CommandPaletteContent({
  actions,
}: {
  actions: CommandAction[]
}) {
  const { close } = useCommandPalette()
  const [search, setSearch] = useState("")
  const [pages, setPages] = useState<string[]>([])
  const page = pages[pages.length - 1]

  const grouped = useMemo(
    () =>
      groupBy(
        actions.filter((it) => it.page === page),
        (a) => a.section
      ),
    [actions, page]
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
        placeholder="输入命令或搜索…"
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
              <EmptyTitle>没有找到结果</EmptyTitle>
              <EmptyDescription>尝试使用不同的关键词搜索</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CommandEmpty>

        {page && (
          <CommandGroup>
            <CommandItem value="__back" onSelect={goBack}>
              <ArrowLeftIcon />
              <span>返回</span>
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
