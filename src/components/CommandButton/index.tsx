import { Icon, IconButton } from "@chakra-ui/react";
import { useKBar } from "kbar";
import { BiCommand } from "react-icons/bi";

function CommandButton() {
  const { query } = useKBar();

  return (
    <IconButton
      aria-label={`Open KBar`}
      onClick={query.toggle}
      icon={<Icon as={BiCommand} />}
      variant="ghost"
    />
  );
}

export default CommandButton;
