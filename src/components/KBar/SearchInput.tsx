import React from "react";
import { useKBar, VisualState } from "kbar";
import { Input, InputProps } from "@chakra-ui/react";

export const KBAR_LISTBOX = "kbar-listbox";
export const getListboxItemId = (id: number) => `kbar-listbox-item-${id}`;

export function SearchInput(
  props: InputProps & {
    defaultPlaceholder?: string;
  }
) {
  const {
    query,
    search,
    actions,
    currentRootActionId,
    activeIndex,
    showing,
    options,
  } = useKBar((state) => ({
    search: state.searchQuery,
    currentRootActionId: state.currentRootActionId,
    actions: state.actions,
    activeIndex: state.activeIndex,
    showing: state.visualState === VisualState.showing,
  }));

  const ownRef = React.useRef<HTMLInputElement>(null);

  const { defaultPlaceholder, ...rest } = props;

  React.useEffect(() => {
    query.setSearch("");
    ownRef.current!.focus();
    return () => query.setSearch("");
  }, [currentRootActionId, query]);

  const placeholder = React.useMemo((): string => {
    const defaultText = defaultPlaceholder ?? "Type a command or search…";
    return currentRootActionId && actions[currentRootActionId]
      ? actions[currentRootActionId].name
      : defaultText;
  }, [actions, currentRootActionId, defaultPlaceholder]);

  // const searchStyle: CSSProperties = {
  //   padding: "12px 16px",
  //   background: "transparent",
  //   width: "100%",
  //   outline: "none",
  // };

  return (
    <Input
      {...rest}
      ref={ownRef}
      autoFocus
      _focus={{ outline: "none" }}
      bg="transparent"
      outline="none"
      border="none"
      autoComplete="off"
      role="combobox"
      spellCheck="false"
      aria-expanded={showing}
      aria-controls={KBAR_LISTBOX}
      aria-activedescendant={getListboxItemId(activeIndex)}
      value={search}
      placeholder={placeholder}
      onChange={(event) => {
        props.onChange?.(event);
        query.setSearch(event.target.value);
        options?.callbacks?.onQueryChange?.(event.target.value);
      }}
      onKeyDown={(event) => {
        props.onKeyDown?.(event);
        if (currentRootActionId && !search && event.key === "Backspace") {
          const parent = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent);
        }
      }}
    />
  );
}
