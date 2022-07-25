import { Components } from "react-markdown";
import { Code, Divider, ListItem } from "@chakra-ui/react";

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
  code: (props) => {
    const { inline, children, className } = props;

    if (inline) {
      return <Code>{children}</Code>;
    }

    return (
      <Code
        className={className}
        whiteSpace="break-spaces"
        display="block"
        w="full"
        p={2}
      >
        {children}
      </Code>
    );
  },
  hr: (props) => {
    return <Divider {...getCoreProps(props)} p={2} />;
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
