import {
  ComponentStyleConfig,
  extendTheme,
  type SystemStyleObject,
  type ThemeConfig,
} from "@chakra-ui/react";

const blurStyle: SystemStyleObject = {
  backdropFilter: "auto",
  backdropBlur: "8px",
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const Button: ComponentStyleConfig = {
  variants: {
    ghost: blurStyle,
  },
};

const Menu: ComponentStyleConfig = {
  baseStyle: {
    list: {
      background: "inhert",
      ...blurStyle,
    },
  },
};

export const theme = extendTheme({ config, components: { Button, Menu } });
