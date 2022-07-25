import { Components } from "react-markdown";
import { ListItem } from "@chakra-ui/react";

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
