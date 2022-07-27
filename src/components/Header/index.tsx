import { Flex } from "@chakra-ui/react";
import { useEvent } from "react-use";
import { useTwemoji } from "useTwemoji";

import ColorSwitchButton from "../ColorSwitchButton";
import DownloadButton from "../DownloadButton";
import LanguageMenu from "../LanguageMenu";

function visible(ele: HTMLElement) {
  ele.style.visibility = "visible";
}

function hidden(ele: HTMLElement) {
  ele.style.visibility = "hidden";
}

function Header() {
  const headerRef = useTwemoji<HTMLDivElement>();

  useEvent("beforeprint", () => {
    hidden(headerRef.current);
  });

  useEvent("afterprint", () => {
    visible(headerRef.current);
  });

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
      <LanguageMenu />
      <ColorSwitchButton />
      <DownloadButton />
    </Flex>
  );
}

export default Header;
