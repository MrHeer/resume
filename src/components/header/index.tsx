import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { getCommandKey } from "utils";

import { LanguageMenu } from "../language-menu";
import { ColorSwitchButton, CommandButton } from "../buttons";

function Placeholder() {
  const commandKey = getCommandKey();
  const textColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Box visibility={["hidden", "hidden", "inherit"]}>
      <Text color={textColor}>{commandKey} + K</Text>
    </Box>
  );
}

export function Header() {
  return (
    <Flex
      sx={{
        "@media print": {
          visibility: "hidden",
        },
      }}
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
