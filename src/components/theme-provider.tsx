import {
  useState,
  useEffect,
  useCallback,
  useSyncExternalStore,
  createContext,
  useContext,
} from "react"
import { ScriptOnce } from "@tanstack/react-router"

type Theme = "light" | "dark"

const themeScript = `(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme;
    if (stored === 'light' || stored === 'dark') {
      theme = stored;
    } else {
      theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})()`

function getThemeFromDOM(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function getResolvedTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return stored
  } catch {
    /* not available */
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

const noopSubscribe = () => () => {}

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>")
  return ctx
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read from DOM (set by ScriptOnce before hydration) so SSR and initial
  // client render agree on "light", avoiding hydration mismatches.
  const domTheme = useSyncExternalStore<Theme>(
    noopSubscribe,
    () => getThemeFromDOM(),
    () => "light"
  )

  const [manualTheme, setManualTheme] = useState<Theme | null>(null)
  const theme = manualTheme ?? domTheme

  // Persist user's explicit choice to DOM class and localStorage
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
      /* not available */
    }
  }, [manualTheme])

  // Follow system preference changes when user hasn't stored a choice
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      if (hasStoredTheme()) return
      const next: Theme = e.matches ? "dark" : "light"
      if (next === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  const setTheme = useCallback((t: Theme) => setManualTheme(t), [])

  const toggleTheme = useCallback(() => {
    setManualTheme((prev) => {
      const current = prev ?? getResolvedTheme()
      return current === "dark" ? "light" : "dark"
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <ScriptOnce children={themeScript} />
      {children}
    </ThemeContext.Provider>
  )
}
