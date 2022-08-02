import { useColorMode } from "@chakra-ui/react";
import { CONFIG } from "config";
import { Action, useRegisterActions } from "kbar";
import { useTranslation } from "react-i18next";

export default function useActions() {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();

  const actions: Action[] = [
    {
      id: "contact",
      name: t("contact"),
      shortcut: ["c"],
      keywords: "email hello",
      section: t("navigation"),
      perform: () => window.open("mailto:hlm52pk@163.com", "_blank"),
    },
    {
      id: "twitter",
      name: t("twitter"),
      shortcut: ["g", "t"],
      keywords: "social contact twitter",
      section: t("navigation"),
      perform: () => window.open("https://twitter.com/MrHeer5", "_blank"),
    },
    {
      id: "github",
      name: t("github"),
      shortcut: ["g", "g"],
      keywords: "github code sourcecode",
      section: t("navigation"),
      perform: () => window.open("https://github.com/MrHeer", "_blank"),
    },
    {
      id: "print",
      name: t("print"),
      shortcut: ["p"],
      keywords: "print save",
      section: t("command"),
      perform: () => setTimeout(window.print, 300),
    },
    {
      id: "theme",
      name: t("changeTheme"),
      keywords: "interface color dark light",
      section: t("preferences"),
    },
    {
      id: "toggleTheme",
      name: t("toggleTheme"),
      shortcut: ["t", "t"],
      keywords: "toggle theme",
      perform: toggleColorMode,
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: t("light"),
      shortcut: ["t", "l"],
      keywords: "light theme",
      perform: () => setColorMode("light"),
      parent: "theme",
    },
    {
      id: "darkTheme",
      name: t("dark"),
      shortcut: ["t", "d"],
      keywords: "dark theme",
      perform: () => setColorMode("dark"),
      parent: "theme",
    },
    {
      id: "language",
      name: t("changeLanguage"),
      keywords: "language i18n",
      section: t("preferences"),
    },
    ...CONFIG.languages.map(
      ({ language, icon, description }) =>
        ({
          id: language,
          name: `${icon} ${description}`,
          keywords: `${description} language`,
          perform: () => i18n.changeLanguage(language),
          parent: "language",
        } as Action)
    ),
  ];

  useRegisterActions(actions, [colorMode, i18n.language]);
}