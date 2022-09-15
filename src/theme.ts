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

const Heading: ComponentStyleConfig = {
  sizes: {
    "4xl": {
      fontSize: "4xl",
      lineHeight: 1,
    },
    "3xl": {
      fontSize: "3xl",
      lineHeight: 1,
    },
    "2xl": {
      fontSize: "2xl",
      lineHeight: [1.2, null, 1],
    },
    xl: {
      fontSize: "xl",
      lineHeight: [1.33, null, 1.2],
    },
    lg: {
      fontSize: "lg",
      lineHeight: [1.33, null, 1.2],
    },
    md: {
      fontSize: "md",
      lineHeight: 1.2,
    },
    sm: {
      fontSize: "sm",
      lineHeight: 1.2,
    },
    xs: {
      fontSize: "xs",
      lineHeight: 1.2,
    },
  },
};

export const theme = extendTheme({
  config,
  components: { Button, Menu, Heading },
});
