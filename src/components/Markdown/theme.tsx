import { Components } from "react-markdown";
import { Code, Divider, Link, ListItem } from "@chakra-ui/react";

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
    const { inline, children, className } = props;

    if (inline) {
      return <Code rounded="md">{children}</Code>;
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
