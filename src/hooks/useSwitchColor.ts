import { useColorMode } from "@chakra-ui/react";
import { MouseEvent } from "react";
import { useCallback } from "react";
import { flushSync } from "react-dom";
import { transitionHelper } from "utils";

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export const useSwitchColor = () => {
  const { toggleColorMode } = useColorMode();
  return useCallback(
    (event: MouseEvent) => {
      const skipTransition =
        !document.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      );

      const transition = transitionHelper({
        skipTransition,
        updateDOM() {
          flushSync(() => {
            toggleColorMode();
          });
        },
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath,
          },
          {
            duration: 500,
            easing: "ease-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [toggleColorMode]
  );
};
