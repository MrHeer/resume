import { useEffect, useRef } from "react";
import { IconButton } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export function DownloadButton() {
  const buttonRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const onBeforePrint = () => {
      buttonRef.current.style.visibility = "hidden";
    };
    const onAfterPrint = () => {
      buttonRef.current.style.visibility = "visible";
    };
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    (() => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    });
  }, []);

  return (
    <IconButton
      ref={buttonRef}
      position="fixed"
      bottom={[5, 5, 10]}
      right={[5, 5, 10]}
      aria-label="Download resume"
      onClick={window.print}
      icon={<DownloadIcon />}
    />
  );
}

export default DownloadButton;
