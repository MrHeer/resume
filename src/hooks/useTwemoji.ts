import { useEffect, useRef } from "react";
import twemoji from "twemoji";

export function useTwemoji<E extends HTMLElement>() {
  const ref = useRef<E>(null!);

  useEffect(() => {
    twemoji.parse(ref.current, { folder: "svg", ext: ".svg" });
  });

  return ref;
}
