import React from "react";
import { useKBar, VisualState } from "kbar";
import { Input, InputProps } from "@chakra-ui/react";

export const KBAR_LISTBOX = "kbar-listbox";
export const getListboxItemId = (id: number) => `kbar-listbox-item-${id}`;

function SearchInput(
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

  const [input, setInput] = React.useState(search);

  const ownRef = React.useRef<HTMLInputElement>(null);

  const { defaultPlaceholder, ...rest } = props;

  // avoid chinese input exception
  React.useEffect(() => {
    setInput(search);
  }, [search]);

  React.useEffect(() => {
    query.setSearch("");
    ownRef.current?.focus();
    return () => query.setSearch("");
  }, [currentRootActionId, query]);

  const placeholder = React.useMemo((): string => {
    const defaultText = defaultPlaceholder ?? "Type a command or search…";
    return currentRootActionId && actions[currentRootActionId]
      ? actions[currentRootActionId].name
      : defaultText;
  }, [actions, currentRootActionId, defaultPlaceholder]);

  return (
    <Input
      {...rest}
      ref={ownRef}
      autoFocus
      variant="unstyled"
      p="12px 16px"
      autoComplete="off"
      role="combobox"
      spellCheck="false"
      aria-expanded={showing}
      aria-controls={KBAR_LISTBOX}
      aria-activedescendant={getListboxItemId(activeIndex)}
      value={input}
      placeholder={placeholder}
      onChange={(event) => {
        const { value } = event.target;
        setInput(value);
        props.onChange?.(event);
        query.setSearch(value);
        options?.callbacks?.onQueryChange?.(value);
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

export default SearchInput;
