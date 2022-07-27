import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { CONFIG } from "config";

export function LanguageMenu() {
  const { languages } = CONFIG;

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        {languages.map(({ language, text }) => (
          <MenuItem key={language}>{text}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default LanguageMenu;
