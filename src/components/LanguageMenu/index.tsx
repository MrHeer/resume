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
import { CONFIG, LANGUAGE_MAP } from "config";
import { useTwemoji } from "hooks";

import "./style.css";

const { languages } = CONFIG;

function LanguageMenu() {
  const menuRef = useTwemoji<HTMLDivElement>();
  const { i18n } = useTranslation();
  const bg = useColorModeValue("gray.200", "whiteAlpha.200");
  const currentLanguage = i18n.language;

  return (
    <Box ref={menuRef}>
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          variant="ghost"
          icon={
            <Box className="twemoji-icon" as="span">
              {LANGUAGE_MAP.get(currentLanguage)?.icon}
            </Box>
          }
        />
        <MenuList minW="120">
          {languages.map(({ language, icon, description }) => (
            <MenuItem
              icon={<Box as="span">{icon}</Box>}
              key={language}
              bg={language === currentLanguage ? bg : undefined}
              onClick={() => i18n.changeLanguage(language)}
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
