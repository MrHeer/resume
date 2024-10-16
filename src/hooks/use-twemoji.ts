import { useEffect, useRef } from "react";
import twemoji from "twemoji";

export function useTwemoji<E extends HTMLElement>() {
  const ref = useRef<E>(null!);

  useEffect(() => {
    twemoji.parse(ref.current, {
      base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
      folder: "svg",
      ext: ".svg",
    });
  });

  return ref;
}
