import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Icon, useColorMode } from "@chakra-ui/react";
import { Action, useRegisterActions } from "kbar";
import { useTranslation } from "react-i18next";
import { MdCall, MdEmail, MdLanguage, MdPrint } from "react-icons/md";
import {
  VscColorMode,
  VscGithub,
  VscSymbolColor,
  VscTwitter,
} from "react-icons/vsc";

export default function useActions() {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  const { CONFIG } = window;

  const actions: Action[] = [
    {
      id: "call",
      name: t("call"),
      shortcut: ["c"],
      keywords: "call mobile hello",
      section: t("navigation"),
      icon: <Icon as={MdCall} />,
      perform: () => window.open(`tel:${CONFIG.mobile}`, "_blank"),
    },
    {
      id: "email",
      name: t("email"),
      shortcut: ["e"],
      keywords: "email hello",
      section: t("navigation"),
      icon: <Icon as={MdEmail} />,
      perform: () => window.open(`mailto:${CONFIG.email}`, "_blank"),
    },
    CONFIG.twitter === undefined
      ? undefined
      : {
          id: "twitter",
          name: t("twitter"),
          shortcut: ["g", "t"],
          keywords: "social contact twitter",
          section: t("navigation"),
          icon: <Icon as={VscTwitter} />,
          perform: () =>
            window.open(`https://twitter.com/${CONFIG.twitter}`, "_blank"),
        },
    CONFIG.github === undefined
      ? undefined
      : {
          id: "github",
          name: t("github"),
          shortcut: ["g", "g"],
          keywords: "github code sourcecode",
          section: t("navigation"),
          icon: <Icon as={VscGithub} />,
          perform: () =>
            window.open(`https://github.com/${CONFIG.github}`, "_blank"),
        },
    {
      id: "print",
      name: t("print"),
      shortcut: ["p"],
      keywords: "print save",
      section: t("command"),
      icon: <Icon as={MdPrint} />,
      perform: () => setTimeout(window.print, 300),
    },
    {
      id: "theme",
      name: t("changeTheme"),
      keywords: "interface color dark light",
      section: t("preferences"),
      icon: <Icon as={VscSymbolColor} />,
    },
    {
      id: "toggleTheme",
      name: t("toggleTheme"),
      shortcut: ["t", "t"],
      keywords: "toggle theme",
      icon: <Icon as={VscColorMode} />,
      perform: toggleColorMode,
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: t("light"),
      shortcut: ["t", "l"],
      keywords: "light theme",
      icon: <SunIcon />,
      perform: () => setColorMode("light"),
      parent: "theme",
    },
    {
      id: "darkTheme",
      name: t("dark"),
      shortcut: ["t", "d"],
      keywords: "dark theme",
      icon: <MoonIcon />,
      perform: () => setColorMode("dark"),
      parent: "theme",
    },
    {
      id: "language",
      name: t("changeLanguage"),
      keywords: "language i18n",
      section: t("preferences"),
      icon: <Icon as={MdLanguage} />,
    },
    ...window.CONFIG.languages.map(
      ({ languageKey, icon, description }) =>
        ({
          id: languageKey,
          name: `${icon} ${description}`,
          keywords: `${description} language`,
          perform: () => i18n.changeLanguage(languageKey),
          parent: "language",
        } as Action)
    ),
  ].filter((action): action is Action => action !== undefined);

  useRegisterActions(actions, [colorMode, i18n.language]);
}
