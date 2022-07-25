import {
  ComponentStyleConfig,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const Button: ComponentStyleConfig = {
  variants: {
    ghost: {
      backdropFilter: "auto",
      backdropBlur: "8px",
    },
  },
};

export const theme = extendTheme({ config, components: { Button } });
