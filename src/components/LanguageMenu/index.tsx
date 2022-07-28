import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { CONFIG } from "config";

import "./style.css"

function LanguageMenu() {
  const { languages } = CONFIG;

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="ghost"
        icon={<Box className="twemoji-icon" as="span">🇨🇳</Box>}
      />
      <MenuList minW="120">
        {languages.map(({ language, icon, description }) => (
          <MenuItem icon={<Box as="span">{icon}</Box>} key={language}>
            {description}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default LanguageMenu;
