import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

import ColorSwitchButton from "../ColorSwitchButton";
import DownloadButton from "../DownloadButton";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const onBeforePrint = () => {
      headerRef.current.style.visibility = "hidden";
    };
    const onAfterPrint = () => {
      headerRef.current.style.visibility = "visible";
    };
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    (() => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    });
  }, []);

  return (
    <Box
      ref={headerRef}
      as="header"
      position="fixed"
      display="flex"
      justifyContent="end"
      top={0}
      left={0}
      right={0}
      p={5}
    >
      <ColorSwitchButton />
      <DownloadButton />
    </Box>
  );
}

export default Header;
