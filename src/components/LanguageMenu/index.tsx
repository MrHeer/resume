import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { CONFIG } from "config";

function LanguageMenu() {
  const { languages } = CONFIG;

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
        🇨🇳
      </MenuButton>
      <MenuList minW="120">
        {languages.map(({ language, icon, description }) => (
          <MenuItem
            display="flex"
            justifyContent="space-between"
            key={language}
          >
            {`${icon} ${description}`}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default LanguageMenu;
