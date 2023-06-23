import { Components } from "react-markdown";
import { Code, Divider, Link, ListItem } from "@chakra-ui/react";
import CodeHighlighter from "./CodeHighlighter";

type GetCoreProps = {
  children?: React.ReactNode;
  "data-sourcepos"?: any;
};

function getCoreProps(props: GetCoreProps): any {
  return props["data-sourcepos"]
    ? { "data-sourcepos": props["data-sourcepos"] }
    : {};
}

export const theme: Components = {
  a: (props) => {
    const { children } = props;
    return (
      <Link color="blue.500" {...props}>
        {children}
      </Link>
    );
  },
  code: (props) => {
    const { node, inline, className, children, style, ...restProps } = props;
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <CodeHighlighter {...restProps} language={match[1]} PreTag="div">
        {String(children).replace(/\n$/, "")}
      </CodeHighlighter>
    ) : (
      <Code {...restProps} className={className} style={style} rounded="md">
        {children}
      </Code>
    );
  },
  hr: (props) => {
    return <Divider {...getCoreProps(props)} w="full" my={5} />;
  },
  li: (props) => {
    const { checked, children } = props;
    return (
      <ListItem
        {...getCoreProps(props)}
        listStyleType={checked !== null ? "none" : "inherit"}
      >
        {children}
      </ListItem>
    );
  },
};
