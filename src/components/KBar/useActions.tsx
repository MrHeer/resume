import { useColorMode } from "@chakra-ui/react";
import { CONFIG } from "config";
import { Action } from "kbar";
import { useTranslation } from "react-i18next";

export default function useActions() {
  const { setColorMode } = useColorMode();
  const { i18n } = useTranslation();

  const actions: Action[] = [
    {
      id: "contactAction",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email hello",
      section: "Navigation",
      perform: () => window.open("mailto:hlm52pk@163.com", "_blank"),
    },
    {
      id: "twitterAction",
      name: "Twitter",
      shortcut: ["t"],
      keywords: "social contact twitter",
      section: "Navigation",
      perform: () => window.open("https://twitter.com/MrHeer5", "_blank"),
    },
    {
      id: "githubAction",
      name: "Github",
      shortcut: ["g"],
      keywords: "github code sourcecode",
      section: "Navigation",
      perform: () => window.open("https://github.com/MrHeer", "_blank"),
    },
    {
      id: "printAction",
      name: "Print",
      shortcut: ["p"],
      keywords: "print save",
      section: "Conmmand",
      perform: () => setTimeout(window.print, 300),
    },
    {
      id: "theme",
      name: "Change theme…",
      keywords: "interface color dark light",
      section: "Preferences",
    },
    {
      id: "lightTheme",
      name: "Light",
      shortcut: ["l"],
      keywords: "light theme",
      perform: () => setColorMode("light"),
      parent: "theme",
    },
    {
      id: "darkTheme",
      name: "Dark",
      shortcut: ["d"],
      keywords: "dark theme",
      perform: () => setColorMode("dark"),
      parent: "theme",
    },
    {
      id: "language",
      name: "Change language…",
      keywords: "language i18n",
      section: "Preferences",
    },
    ...CONFIG.languages.map(
      ({ language, icon, description }) =>
        ({
          id: language,
          name: `${icon} ${description}`,
          keywords: `${language} language`,
          perform: () => i18n.changeLanguage(language),
          parent: "language",
        } as Action)
    ),
  ];

  return actions;
}
