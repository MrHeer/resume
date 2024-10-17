import { useColorModeValue, useTheme } from "@chakra-ui/react";
import { Helmet as ReactHelmet } from "react-helmet";

export function Helmet() {
  const theme = useTheme();
  const backgroundTheme: {
    _light: string;
    _dark: string;
  } = theme.semanticTokens.colors["chakra-body-bg"];
  const backgroundColor = useColorModeValue(
    backgroundTheme?.["_light"],
    backgroundTheme?.["_dark"]
  );
  console.log(theme.semanticTokens?.colors?.["chakra-body-bg"]);
  return (
    <ReactHelmet>
      <meta name="theme-color" content={backgroundColor} />
    </ReactHelmet>
  );
}
