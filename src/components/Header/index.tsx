import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useVisibilityWhilePrint } from "hooks";

import LanguageMenu from "../LanguageMenu";
import ColorSwitchButton from "../ColorSwitchButton";
import CommandButton from "../CommandButton";
import { getCommandKey } from "utils";

function Placeholder() {
  const commandKey = getCommandKey();
  const textColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Box visibility={["hidden", "hidden", "visible"]}>
      <Text color={textColor}>{commandKey} + K</Text>
    </Box>
  );
}

function Header() {
  const headerRef = useVisibilityWhilePrint<HTMLDivElement>();

  return (
    <Flex
      ref={headerRef}
      as="header"
      position="fixed"
      justify="space-between"
      top={0}
      left={0}
      right={0}
      p={5}
      gap={2}
      zIndex={2}
    >
      <Placeholder />
      <Flex gap={2}>
        <LanguageMenu />
        <ColorSwitchButton />
        <CommandButton />
      </Flex>
    </Flex>
  );
}

export default Header;
