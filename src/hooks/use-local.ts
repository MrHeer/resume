import { fallbackSlug, languageOptions } from "@/lib/config"
import type { LanguageSlug } from "@/lib/config"
import { useParams } from "@tanstack/react-router"

export function useLocal() {
  const { slug } = useParams({ strict: false })
  const language = languageOptions.find((it) => it.slug === slug)
  return language ?? languageOptions.find((it) => it.slug === fallbackSlug)!
}

const en = {
  share: "Share",
  resume: "Resume",
  vCard: "VCard",
  call: "Call",
  callKeywords: ["phone", "mobile", "call", "telephone"],
}

type TranslationShape = typeof en

const translate = {
  "zh-CN": {
    share: "分享",
    resume: "简历",
    vCard: "名片",
    call: "拨打电话",
    callKeywords: ["电话", "打电话", "phone", "mobile", "call", "telephone"],
  },
  "en-US": en,
} as const satisfies Record<LanguageSlug, TranslationShape>

export function useTranslation() {
  const { slug } = useLocal()
  return translate[slug]
}
