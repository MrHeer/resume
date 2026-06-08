import { useMemo, createElement } from "react"
import twemoji from "twemoji"

const defaults = {
  base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
  folder: "svg",
  ext: ".svg",
  className: "emoji",
} as const

/**
 * Render text with native emoji replaced by Twemoji SVG images.
 * Zero DOM mutation — React owns the output.
 *
 * @example
 * <Twemoji>🇨🇳 中文</Twemoji>
 * <Twemoji tag="h1">👋 Hello</Twemoji>
 * <Twemoji className="text-lg">🎉</Twemoji>
 */
export function Twemoji({
  children,
  tag = "span",
  className,
}: {
  children: string
  tag?: string
  className?: string
}) {
  const html = useMemo(() => twemoji.parse(children, defaults), [children])

  return createElement(tag, {
    className,
    dangerouslySetInnerHTML: { __html: html },
  })
}
