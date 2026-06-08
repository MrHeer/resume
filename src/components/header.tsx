import { useMemo } from "react"
import { ClientOnly, Link, useParams } from "@tanstack/react-router"
import { QRCodeSVG } from "qrcode.react"
import VCard from "vcard-creator"
import { SunIcon, MoonIcon, Share2Icon, CommandIcon } from "lucide-react"

import { Twemoji } from "@/components/twemoji"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Kbd } from "@/components/ui/kbd"
import { languages, personalInfo } from "@/lib/config"
import { useTheme } from "@/hooks/use-theme"

function getCommandKey() {
  if (typeof navigator === "undefined") return "Ctrl"
  return navigator.userAgent.includes("Mac OS") ? "⌘" : "Ctrl"
}

function CommandHint() {
  const commandKey = getCommandKey()

  return (
    <span className="hidden items-center gap-1 text-sm text-muted-foreground md:inline-flex">
      <span>{commandKey}</span>
      <span>+</span>
      <Kbd>K</Kbd>
    </span>
  )
}

function LanguageMenu() {
  const { slug } = useParams({ strict: false })
  const currentSlug = slug || "zh-CN"

  const currentLanguage = languages.find((l) => l.slug === currentSlug)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Switch language" />
        }
      >
        {currentLanguage && (
          <Twemoji className="text-base leading-none">
            {currentLanguage.icon}
          </Twemoji>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        {languages.map(({ slug, icon, label }) => (
          <DropdownMenuItem
            key={slug}
            render={
              <Link
                to="/$slug"
                params={{ slug }}
                activeProps={{ className: "font-medium" }}
              />
            }
          >
            <Twemoji tag="span" className="mr-2 text-base leading-none">
              {icon}
            </Twemoji>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

function ShareDialog() {
  const { firstName, lastName, jobTitle, phone, email, github, twitter } =
    personalInfo

  const resumeUrl = typeof window !== "undefined" ? window.location.href : ""

  const vCardText = useMemo(() => {
    const vCard = new VCard()
      .addName({ givenName: firstName, familyName: lastName })
      .addJobtitle(jobTitle)
      .addPhoneNumber({ number: phone })
      .addEmail({ address: email })
    if (github) {
      vCard.addSocial({
        url: `https://github.com/${github}`,
        type: "GitHub",
        user: github,
      })
    }
    if (twitter) {
      vCard.addSocial({
        url: `https://x.com/${twitter}`,
        type: "Twitter",
        user: twitter,
      })
    }
    return vCard.toString()
  }, [firstName, lastName, jobTitle, phone, email, github, twitter])

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Share resume" />
        }
      >
        <Share2Icon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="resume">
          <TabsList variant="default" className="w-full">
            <TabsTrigger value="resume">Resume</TabsTrigger>
            <TabsTrigger value="vcard">vCard</TabsTrigger>
          </TabsList>
          <TabsContent value="resume" className="flex justify-center pt-4">
            <QRCodeSVG value={resumeUrl} size={200} level="M" />
          </TabsContent>
          <TabsContent value="vcard" className="flex justify-center pt-4">
            <QRCodeSVG value={vCardText} size={200} level="M" />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

function CommandButtonPlaceholder() {
  const commandKey = getCommandKey()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Open command palette (${commandKey}+K)`}
      disabled
    >
      <CommandIcon />
    </Button>
  )
}

export function Header() {
  return (
    <ClientOnly>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between p-5 backdrop-blur-sm print:hidden">
        <CommandHint />
        <div className="flex items-center gap-1">
          <LanguageMenu />
          <ShareDialog />
          <ThemeToggle />
          <CommandButtonPlaceholder />
        </div>
      </header>
    </ClientOnly>
  )
}
