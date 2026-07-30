export const TWEEMOJI_CDN =
  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/"
export const SVG_BASE = `${TWEEMOJI_CDN}svg/`

const ESCAPED_BASE = SVG_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

/**
 * Regex that matches twemoji `<img>` tags with `class="emoji"`, capturing
 * the codepoint. Handles any attribute order (class-first or src-first).
 */
export const IMG_RE = new RegExp(
  `<img\\s[^>]*class="emoji"[^>]*src="${ESCAPED_BASE}([a-z0-9-]+)\\.svg"[^>]*/?>` +
    `|<img\\s[^>]*src="${ESCAPED_BASE}([a-z0-9-]+)\\.svg"[^>]*class="emoji"[^>]*/?>`,
  "g"
)

/** Extract unique codepoints from HTML containing twemoji `<img>` tags. */
export function extractCodepoints(html: string): Set<string> {
  const codepoints = new Set<string>()
  for (const m of html.matchAll(IMG_RE)) {
    const cp = m[1] ?? m[2]
    if (cp) codepoints.add(cp)
  }
  return codepoints
}

/** Fetch twemoji SVGs from CDN. Populates cache; skips already-cached entries. */
export async function fetchSvgs(
  codepoints: Set<string>,
  cache: Map<string, string>
): Promise<void> {
  await Promise.all(
    Array.from(codepoints).map(async (cp) => {
      if (cache.has(cp)) return
      try {
        const res = await fetch(`${SVG_BASE}${cp}.svg`)
        if (res.ok) cache.set(cp, await res.text())
      } catch {
        /* keep fallback */
      }
    })
  )
}

/**
 * Replace twemoji `<img>` tags in HTML with inline `<svg>` elements.
 * Uses pre-populated SVG cache; unmapped codepoints are left as `<img>`.
 */
export function replaceImgsWithSvgs(
  html: string,
  cache: Map<string, string>
): string {
  return html.replace(IMG_RE, (full) => {
    const srcMatch = full.match(new RegExp(ESCAPED_BASE + "([a-z0-9-]+)\\.svg"))
    const cp = srcMatch?.[1]
    if (!cp) return full
    const svg = cache.get(cp)
    if (!svg) return full
    const altMatch = full.match(/alt="([^"]*)"/)
    const alt =
      altMatch?.[1]?.replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
        String.fromCodePoint(parseInt(hex, 16))
      ) ?? ""
    return svg.replace(
      /<svg/,
      `<svg class="emoji" role="img" aria-label="${alt}"`
    )
  })
}
