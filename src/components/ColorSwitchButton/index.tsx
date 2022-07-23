import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function ColorSwitchButton() {
  const { toggleColorMode: toggleMode } = useColorMode();

  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      onClick={toggleMode}
      icon={<SwitchIcon />}
      variant="ghost"
    />
  );
}

export default ColorSwitchButton;
