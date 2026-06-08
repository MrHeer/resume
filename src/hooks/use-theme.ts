import { useState, useEffect, useCallback } from "react"

type Theme = "light" | "dark"

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // localStorage not available
  }
  return null
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(
    () => getStoredTheme() ?? getSystemTheme()
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // localStorage not available
    }
  }, [theme])

  // Listen for system theme changes when no stored preference
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) {
        setThemeState(e.matches ? "dark" : "light")
      }
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggleTheme } as const
}
