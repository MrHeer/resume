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
      const skipTransition = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const transition = transitionHelper({
        skipTransition,
        updateDOM: () => flushSync(toggleColorMode),
      });

      transition.ready.then(() => {
        const x = event.clientX;
        const y = event.clientY;
        const endRadius = Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        );
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath,
          },
          {
            duration: 1000,
            // ref: https://github.com/emilkowalski/vaul/blob/main/src/style.css#L4
            easing: "cubic-bezier(0.32, 0.72, 0, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [toggleColorMode]
  );
};
