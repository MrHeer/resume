import { useMemo } from "react"
import { useNavigate } from "@tanstack/react-router"
import {
  PhoneIcon,
  MailIcon,
  PrinterIcon,
  SunIcon,
  MoonIcon,
  AtSignIcon,
  GlobeIcon,
  PaletteIcon,
  ArrowLeftRightIcon,
} from "lucide-react"
import { personalInfo, languages } from "@/lib/config"
import { useTheme } from "@/hooks/use-theme"
import { Twemoji } from "@/components/twemoji"
import type { CommandAction } from "./types"
import { useLocal } from "@/hooks/use-local"

export function useCommandActions(): CommandAction[] {
  const { slug } = useLocal()
  const navigate = useNavigate()
  const { theme, setTheme, toggleTheme } = useTheme()

  return useMemo(() => {
    return [
      {
        id: "call",
        label: "拨打电话",
        icon: <PhoneIcon />,
        keywords: ["phone", "mobile", "call", "telephone"],
        shortcut: ["c"],
        section: "导航",
        action: () => window.open(`tel:${personalInfo.phone}`, "_blank"),
      },
      {
        id: "email",
        label: "发送邮件",
        icon: <MailIcon />,
        keywords: ["email", "mail", "e-mail"],
        shortcut: ["e"],
        section: "导航",
        action: () => window.open(`mailto:${personalInfo.email}`, "_blank"),
      },
      {
        id: "github",
        label: "GitHub",
        icon: <AtSignIcon />,
        keywords: ["github", "code", "source", "repository", "sourcecode"],
        shortcut: ["g", "g"],
        section: "导航",
        action: () =>
          window.open(`https://github.com/${personalInfo.github}`, "_blank"),
      },
      {
        id: "x",
        label: "X",
        icon: <AtSignIcon />,
        keywords: ["x", "twitter", "social", "contact"],
        shortcut: ["g", "x"],
        section: "导航",
        action: () => window.open(`https://x.com/${personalInfo.x}`, "_blank"),
      },
      {
        id: "print",
        label: "打印",
        icon: <PrinterIcon />,
        keywords: ["print", "save"],
        shortcut: ["p"],
        section: "命令",
        action: () => setTimeout(window.print, 300),
      },
      {
        id: "theme",
        label: "更换主题…",
        icon: <PaletteIcon />,
        keywords: ["interface", "color", "dark", "light"],
        nextPage: "theme",
        section: "偏好设置",
      },
      {
        id: "toggleTheme",
        label: "切换主题",
        icon: <ArrowLeftRightIcon />,
        keywords: ["toggle", "theme"],
        shortcut: ["t", "t"],
        section: "更换主题…",
        page: "theme",
        action: toggleTheme,
      },
      {
        id: "lightTheme",
        label: "浅色主题",
        icon: <SunIcon />,
        keywords: ["light", "theme"],
        shortcut: ["t", "l"],
        section: "更换主题…",
        page: "theme",
        action: () => setTheme("light"),
      },
      {
        id: "darkTheme",
        label: "深色主题",
        icon: <MoonIcon />,
        keywords: ["dark", "theme"],
        shortcut: ["t", "d"],
        section: "更换主题…",
        page: "theme",
        action: () => setTheme("dark"),
      },
      {
        id: "language",
        label: "切换语言…",
        icon: <GlobeIcon />,
        keywords: ["language", "i18n"],
        section: "偏好设置",
        nextPage: "language",
      },
      ...languages.map(
        (lang): CommandAction => ({
          id: `lang-${lang.slug}`,
          label: lang.label,
          icon: (
            <Twemoji tag="span" className="text-base leading-none">
              {lang.icon}
            </Twemoji>
          ),
          keywords: [lang.label, "language", "i18n"],
          section: "切换语言…",
          page: "language",
          action: () => {
            navigate({ to: "/$slug", params: { slug: lang.slug } })
          },
        })
      ),
    ]
  }, [theme, setTheme, toggleTheme, navigate, slug])
}
