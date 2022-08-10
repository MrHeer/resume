import React from "react";
import {
  ActionId,
  ActionImpl,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  useMatches,
} from "kbar";
import { Box, Kbd, Text, useColorModeValue } from "@chakra-ui/react";
import { useTwemoji, useVisibilityWhilePrint } from "hooks";
import { useTranslation } from "react-i18next";
import SearchInput from "./SearchInput";
import useActions from "./useActions";

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <Text
            color="GrayText"
            padding="8px 16px"
            fontSize="smaller"
            textTransform="uppercase"
          >
            {item}
          </Text>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId!}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const itemRef = useTwemoji<HTMLDivElement>();
    const bg = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
    const borderLeftColor = useColorModeValue("black", "white");

    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <Box
        ref={ref}
        display="flex"
        bg={active ? bg : "transparent"}
        borderLeftColor={active ? borderLeftColor : "transparent"}
        p="12px 16px"
        alignItems="center"
        justifyContent="space-between"
        borderLeftWidth={2}
        cursor="pointer"
        borderLeftStyle="solid"
      >
        <Box
          ref={itemRef}
          display="flex"
          gap={2}
          alignItems="center"
          fontSize="smaller"
        >
          {action.icon && action.icon}
          <Box flex="flex" flexDirection="column">
            <Box>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <Box as="span" opacity={0.5} mr={2}>
                      {ancestor.name}
                    </Box>
                    <Box as="span" mr={2}>
                      &rsaquo;
                    </Box>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </Box>
            {action.subtitle && <Box fontSize="12px">{action.subtitle}</Box>}
          </Box>
        </Box>
        {action.shortcut?.length ? (
          <Box display="grid" gridAutoFlow="column" gap={2} aria-hidden>
            {action.shortcut.map((sc, index) => (
              <Kbd key={`${action.id}.${sc}.${index}`}>{sc}</Kbd>
            ))}
          </Box>
        ) : null}
      </Box>
    );
  }
);

ResultItem.displayName = "ResultItem";

function CommandBar() {
  const kbarRef = useVisibilityWhilePrint<HTMLDivElement>();
  const { t } = useTranslation();

  useActions();

  return (
    <KBarPortal>
      <KBarPositioner>
        <Box
          ref={kbarRef}
          shadow="dark-lg"
          maxWidth="600px"
          w="full"
          borderRadius="xl"
          overflow="hidden"
          backdropFilter="auto"
          backdropBlur="8px"
        >
          <KBarAnimator>
            <SearchInput
              defaultPlaceholder={t("kBarSearchDefaultPlaceholder")}
            />
            <RenderResults />
          </KBarAnimator>
        </Box>
      </KBarPositioner>
    </KBarPortal>
  );
}

interface Props {
  children: React.ReactNode;
}

function KBar({ children }: Props) {
  return (
    <KBarProvider>
      <CommandBar />
      {children}
    </KBarProvider>
  );
}

export default KBar;
