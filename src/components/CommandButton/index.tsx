import { Icon, IconButton } from "@chakra-ui/react";
import { useKBar } from "kbar";
import { BiCommand } from "react-icons/bi";
import { getCommandKey } from "utils";

function CommandButton() {
  const { query } = useKBar();
  const commandKey = getCommandKey();

  return (
    <IconButton
      title={`${commandKey} + K`}
      aria-label={`Open KBar`}
      onClick={query.toggle}
      icon={<Icon as={BiCommand} />}
      variant="ghost"
    />
  );
}

export default CommandButton;
