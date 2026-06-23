import { useMemo } from "react"
import { useNavigate } from "@tanstack/react-router"
import {
  PhoneIcon,
  MailIcon,
  PrinterIcon,
  SunIcon,
  MoonIcon,
  GlobeIcon,
  PaletteIcon,
  ArrowLeftRightIcon,
} from "lucide-react"
import { GithubIcon, XSocialIcon } from "@/components/icons"
import { personalInfo, languageOptions } from "@/lib/config"
import { useTheme } from "@/components/theme-provider"
import { Twemoji } from "@/components/twemoji"
import type { CommandAction } from "./types"
import { useTranslation } from "@/hooks/use-translation"

export function useCommandActions(): CommandAction[] {
  const t = useTranslation()
  const p = t.palette
  const navigate = useNavigate()
  const { setTheme, toggleTheme } = useTheme()

  return useMemo(() => {
    const personalActions: CommandAction[] = []

    if (personalInfo.phone) {
      personalActions.push({
        id: "call",
        label: p.call.label,
        icon: <PhoneIcon />,
        keywords: p.call.keywords,
        shortcut: ["c"],
        section: p.sections.navigation,
        action: () => window.open(`tel:${personalInfo.phone}`, "_blank"),
      })
    }

    if (personalInfo.email) {
      personalActions.push({
        id: "email",
        label: p.email.label,
        icon: <MailIcon />,
        keywords: p.email.keywords,
        shortcut: ["e"],
        section: p.sections.navigation,
        action: () => window.open(`mailto:${personalInfo.email}`, "_blank"),
      })
    }

    if (personalInfo.github) {
      personalActions.push({
        id: "github",
        label: "GitHub",
        icon: <GithubIcon />,
        keywords: p.github.keywords,
        shortcut: ["g", "g"],
        section: p.sections.navigation,
        action: () =>
          window.open(`https://github.com/${personalInfo.github}`, "_blank"),
      })
    }

    if (personalInfo.x) {
      personalActions.push({
        id: "x",
        label: "X",
        icon: <XSocialIcon />,
        keywords: p.x.keywords,
        shortcut: ["g", "x"],
        section: p.sections.navigation,
        action: () => window.open(`https://x.com/${personalInfo.x}`, "_blank"),
      })
    }

    return [
      ...personalActions,
      {
        id: "print",
        label: p.print.label,
        icon: <PrinterIcon />,
        keywords: p.print.keywords,
        shortcut: ["p"],
        section: p.sections.commands,
        action: () => {
          // Wait for the dialog's 100ms close animation (duration-100 +
          // data-closed:animate-out) to finish before opening the print dialog.
          const el = document.querySelector("[data-slot=\"dialog-content\"]")
          if (el) {
            let done = false
            const finish = () => {
              if (done) return
              done = true
              el.removeEventListener("animationend", finish)
              window.print()
            }
            el.addEventListener("animationend", finish)
            // Safety fallback if animationend never fires
            setTimeout(finish, 500)
          } else {
            window.print()
          }
        },
      },
      {
        id: "theme",
        label: p.theme.label,
        icon: <PaletteIcon />,
        keywords: p.theme.keywords,
        nextPage: "theme",
        section: p.sections.preferences,
      },
      {
        id: "toggleTheme",
        label: p.theme.toggle.label,
        icon: <ArrowLeftRightIcon />,
        keywords: p.theme.toggle.keywords,
        shortcut: ["t", "t"],
        section: p.theme.label,
        page: "theme",
        action: toggleTheme,
      },
      {
        id: "lightTheme",
        label: p.theme.light.label,
        icon: <SunIcon />,
        keywords: p.theme.light.keywords,
        shortcut: ["t", "l"],
        section: p.theme.label,
        page: "theme",
        action: () => setTheme("light"),
      },
      {
        id: "darkTheme",
        label: p.theme.dark.label,
        icon: <MoonIcon />,
        keywords: p.theme.dark.keywords,
        shortcut: ["t", "d"],
        section: p.theme.label,
        page: "theme",
        action: () => setTheme("dark"),
      },
      {
        id: "language",
        label: p.language.label,
        icon: <GlobeIcon />,
        keywords: p.language.keywords,
        section: p.sections.preferences,
        nextPage: "language",
      },
      ...languageOptions.map(
        (lang): CommandAction => ({
          id: `lang-${lang.slug}`,
          label: lang.label,
          icon: (
            <Twemoji tag="span" className="text-base leading-none">
              {lang.icon}
            </Twemoji>
          ),
          keywords: [lang.label, ...p.language.keywords],
          section: p.language.label,
          page: "language",
          action: () => {
            navigate({ to: "/$slug", params: { slug: lang.slug } })
          },
        })
      ),
    ]
  }, [t, p, setTheme, toggleTheme, navigate])
}
