import { useState, useEffect, useCallback, useSyncExternalStore } from "react"

type Theme = "light" | "dark"

function getResolvedTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // localStorage not available
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function hasStoredTheme(): boolean {
  try {
    const stored = localStorage.getItem("theme")
    return stored === "light" || stored === "dark"
  } catch {
    return false
  }
}

/**
 * Returns the current theme by reading the DOM class set by ScriptOnce.
 * This avoids SSR/hydration mismatches because ScriptOnce runs before
 * React hydrates, guaranteeing the DOM reflects the true theme.
 */
function getThemeFromDOM(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

const noopSubscribe = () => () => {}

export function useTheme() {
  // During SSR, return "light" (default). On the client, read from DOM (set by ScriptOnce).
  // useSyncExternalStore ensures the value is consistent between server and initial client render.
  const theme = useSyncExternalStore<Theme>(
    noopSubscribe,
    () => getThemeFromDOM(),
    () => "light"
  )

  const [manualTheme, setManualTheme] = useState<Theme | null>(null)

  // The effective theme: user's explicit choice overrides the DOM state
  const effectiveTheme = manualTheme ?? theme

  // Sync the class and localStorage when the user manually toggles
  useEffect(() => {
    if (manualTheme === null) return
    const root = document.documentElement
    if (manualTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    try {
      localStorage.setItem("theme", manualTheme)
    } catch {
      // localStorage not available
    }
  }, [manualTheme])

  // Listen for system theme changes when no stored preference
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      if (!hasStoredTheme()) {
        const next: Theme = e.matches ? "dark" : "light"
        const root = document.documentElement
        if (next === "dark") {
          root.classList.add("dark")
        } else {
          root.classList.remove("dark")
        }
      }
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  const setTheme = useCallback((newTheme: Theme) => {
    setManualTheme(newTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setManualTheme((prev) => {
      const current = prev ?? getResolvedTheme()
      return current === "dark" ? "light" : "dark"
    })
  }, [])

  return { theme: effectiveTheme, setTheme, toggleTheme } as const
}
