import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { getLanguageOption } from "config";
import { useTwemoji } from "hooks";

import "./style.css";

function LanguageMenu() {
  const menuRef = useTwemoji<HTMLDivElement>();
  const { i18n } = useTranslation();
  const bg = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const hoverBg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const currentLanguage = i18n.language;
  const { CONFIG } = window;
  const { languages } = CONFIG;

  return (
    <Box ref={menuRef}>
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          variant="ghost"
          icon={
            <Box className="twemoji-icon" as="span">
              {getLanguageOption(currentLanguage).icon}
            </Box>
          }
        />
        <MenuList minW="120">
          {languages.map(({ languageKey, icon, description }) => (
            <MenuItem
              icon={<Box as="span">{icon}</Box>}
              key={languageKey}
              _hover={{ bg: hoverBg }}
              bg={languageKey === currentLanguage ? bg : "transparent"}
              onClick={() => i18n.changeLanguage(languageKey)}
            >
              {description}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default LanguageMenu;
