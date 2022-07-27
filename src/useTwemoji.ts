import { useEffect, useRef } from "react";
import twemoji from "twemoji";

export function useTwemoji<T extends HTMLElement>() {
  const ref = useRef<T>(null!);

  useEffect(() => {
    twemoji.parse(ref.current, { folder: "svg", ext: ".svg" });
  });

  return ref;
}
