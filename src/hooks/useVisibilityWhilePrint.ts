import { useRef } from "react";
import { useEvent } from "react-use";

function visible(ele: HTMLElement) {
  ele.style.visibility = "visible";
}

function hidden(ele: HTMLElement) {
  ele.style.visibility = "hidden";
}

export function useVisibilityWhilePrint<E extends HTMLElement>() {
  const ele = useRef<E>(null!);

  useEvent("beforeprint", () => {
    hidden(ele.current);
  });

  useEvent("afterprint", () => {
    visible(ele.current);
  });

  return ele;
}
