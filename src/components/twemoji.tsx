import { useMemo, createElement } from "react"
import twemoji from "twemoji"
import { TWEEMOJI_CDN, replaceImgsWithSvgs } from "@/lib/twemoji-svg"
import { FLAG_SVGS } from "@/lib/twemoji-flag-svgs"

const defaults = {
  base: TWEEMOJI_CDN,
  folder: "svg",
  ext: ".svg",
  className: "emoji",
} as const

/**
 * SVG cache pre-populated at build time from `languageOptions` in config.ts.
 * No CDN fetch at runtime — SVGs are bundled in the JS payload.
 */
const svgCache = new Map(Object.entries(FLAG_SVGS))

/**
 * Render text with native emoji replaced by inline Twemoji SVG elements.
 * SVGs for known emoji are bundled at build time — rendering is fully
 * synchronous with zero runtime network requests.
 *
 * If an emoji's SVG is not cached, twemoji `<img>` tags serve as a fallback.
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
  const svgHtml = useMemo(() => {
    const imgHtml = twemoji.parse(children, defaults)
    return replaceImgsWithSvgs(imgHtml, svgCache)
  }, [children])

  return createElement(tag, {
    className,
    dangerouslySetInnerHTML: { __html: svgHtml },
  })
}
