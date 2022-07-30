import { useColorMode } from "@chakra-ui/react";
import { useRegisterActions } from "kbar";

export default function useThemeActions() {
  const { setColorMode } = useColorMode();

  useRegisterActions([
    {
      id: "theme",
      name: "Change theme…",
      keywords: "interface color dark light",
      section: "Preferences",
    },
    {
      id: "darkTheme",
      name: "Dark",
      keywords: "dark theme",
      perform: () => setColorMode("dark"),
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      perform: () => setColorMode("light"),
      parent: "theme",
    },
  ]);
}
