import { Flex } from "@chakra-ui/react";
import { useVisibilityWhilePrint } from "hooks";

import LanguageMenu from "../LanguageMenu";
import ColorSwitchButton from "../ColorSwitchButton";
import CommandButton from "../CommandButton";

function Header() {
  const headerRef = useVisibilityWhilePrint<HTMLDivElement>();

  return (
    <Flex
      ref={headerRef}
      as="header"
      position="fixed"
      justify="flex-end"
      top={0}
      left={0}
      right={0}
      p={5}
      gap={2}
      zIndex={2}
    >
      <LanguageMenu />
      <ColorSwitchButton />
      <CommandButton />
    </Flex>
  );
}

export default Header;
