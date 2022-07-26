import { useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";

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
    () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  return (
    <Flex
      ref={headerRef}
      as="header"
      position="fixed"
      justify="flex-end"
      top={0}
      left={0}
      right={0}
      p={5}
      gap={2}
    >
      <ColorSwitchButton />
      <DownloadButton />
    </Flex>
  );
}

export default Header;
