import { useMemo } from "react"
import { ClientOnly, Link, useParams } from "@tanstack/react-router"
import { QRCodeSVG } from "qrcode.react"
import VCard from "vcard-creator"
import { SunIcon, MoonIcon, Share2Icon, CommandIcon } from "lucide-react"
import { LinearBlur } from "progressive-blur"

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
import { fallbackLanguage, languages, personalInfo } from "@/lib/config"
import { useTheme } from "@/hooks/use-theme"
import { useCommandPalette } from "@/components/command-palette"

function getCommandKey() {
  if (typeof navigator === "undefined") return "Ctrl"
  return navigator.userAgent.includes("Mac OS") ? "⌘" : "Ctrl"
}

function CommandHint() {
  const commandKey = getCommandKey()

  return (
    <span className="hidden items-center gap-1 text-sm text-muted-foreground md:inline-flex">
      <Kbd>{commandKey}</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </span>
  )
}

function LanguageMenu() {
  const { slug: lang } = useParams({ strict: false })
  const currentLang = lang || fallbackLanguage

  const effectiveLanguage = languages.find((l) => l.slug === currentLang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Switch language" />
        }
      >
        {effectiveLanguage && (
          <Twemoji className="text-base leading-none">
            {effectiveLanguage.icon}
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
  const { toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <SunIcon aria-hidden className="hidden [html.dark_&]:block" />
      <MoonIcon aria-hidden className="block [html.dark_&]:hidden" />
    </Button>
  )
}

function ShareDialog() {
  const { firstName, lastName, jobTitle, phone, email, github, x } =
    personalInfo

  const resumeUrl = typeof window !== "undefined" ? window.location.href : ""

  const vCardText = useMemo(() => {
    const vCard = new VCard()
      .addName({ givenName: firstName, familyName: lastName })
      .addJobtitle(jobTitle)
      .addPhoneNumber({ number: phone, type: ["work"] })
      .addEmail({ address: email, type: ["work"] })
    if (github) {
      vCard.addSocial({
        url: `https://github.com/${github}`,
        type: "GitHub",
        user: github,
      })
    }
    if (x) {
      vCard.addSocial({
        url: `https://x.com/${x}`,
        type: "X",
        user: x,
      })
    }
    return vCard.toString()
  }, [firstName, lastName, jobTitle, phone, email, github, x])

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
          <DialogTitle>分享</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="resume">
          <TabsList className="m-auto">
            <TabsTrigger className="min-w-24" value="resume">
              简历
            </TabsTrigger>
            <TabsTrigger className="min-w-24" value="vcard">
              名片
            </TabsTrigger>
          </TabsList>
          <TabsContent value="resume" className="flex justify-center py-4">
            <ClientOnly>
              <QRCodeSVG value={resumeUrl} size={200} level="M" />
            </ClientOnly>
          </TabsContent>
          <TabsContent value="vcard" className="flex justify-center py-4">
            <QRCodeSVG value={vCardText} size={200} level="M" />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

function CommandButton() {
  const { open } = useCommandPalette()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Open command palette"
      onClick={open}
    >
      <CommandIcon />
    </Button>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 print:hidden">
      <LinearBlur
        className="absolute inset-x-0 -z-10 h-32"
        side="top"
        steps={16}
        strength={4}
        falloffPercentage={50}
      />

      <ClientOnly>
        <CommandHint />
      </ClientOnly>
      <div className="ml-auto flex items-center gap-1">
        <LanguageMenu />
        <ShareDialog />
        <ThemeToggle />
        <CommandButton />
      </div>
    </header>
  )
}
