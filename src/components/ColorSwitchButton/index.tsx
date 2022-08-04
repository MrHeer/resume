import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ColorSwitchButton() {
  const { toggleColorMode: toggleMode } = useColorMode();

  const text = useColorModeValue("light", "dark");
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      aria-label={`current is ${text} mode`}
      onClick={toggleMode}
      icon={<SwitchIcon />}
      variant="ghost"
    />
  );
}

export default ColorSwitchButton;
