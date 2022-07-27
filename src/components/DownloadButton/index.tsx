import { IconButton } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

function DownloadButton() {
  return (
    <IconButton
      aria-label="Download resume"
      onClick={window.print}
      icon={<DownloadIcon />}
      variant="ghost"
    />
  );
}

export default DownloadButton;
