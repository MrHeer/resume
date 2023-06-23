import { useColorModeValue } from "@chakra-ui/react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import {
  oneDark as dark,
  oneLight as light,
} from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeHighlighter(props: SyntaxHighlighterProps) {
  const style = useColorModeValue(light, dark);

  return (
    <SyntaxHighlighter
      style={style}
      customStyle={{ borderRadius: "0.5em", margin: "1em 0px" }}
      {...props}
    />
  );
}

export default CodeHighlighter;
