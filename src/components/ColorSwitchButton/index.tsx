import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSwitchColor } from "hooks/useSwitchColor";

function ColorSwitchButton() {
  const switchColor = useSwitchColor();

  const text = useColorModeValue("light", "dark");
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      aria-label={`current is ${text} mode`}
      onClick={switchColor}
      icon={<SwitchIcon />}
      variant="ghost"
    />
  );
}

export default ColorSwitchButton;
