import { Components } from "react-markdown";
import { Code, Divider, Link, ListItem } from "@chakra-ui/react";
import { CodeHighlighter } from "./code-highlighter";

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
    const { inline, className, children } = props;
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <CodeHighlighter language={match[1]} PreTag="div">
        {String(children).replace(/\n$/, "")}
      </CodeHighlighter>
    ) : (
      <Code className={className} rounded="md">
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
