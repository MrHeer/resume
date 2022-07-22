import { IconButton } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export function DownloadButton() {
  return (
    <IconButton
      position="fixed"
      bottom={[5, 5, 10]}
      right={[5, 5, 10]}
      aria-label="Download resume"
      onClick={() => window.print()}
      icon={<DownloadIcon />}
    />
  );
}

export default DownloadButton;
