import { fallbackSlug, languageOptions, personalInfo } from "@/lib/config"
import { translations } from "@/lib/translations"
import { useParams } from "@tanstack/react-router"
import { useMemo } from "react"

export function useLocal() {
  const { slug } = useParams({ strict: false })
  const language = languageOptions.find((it) => it.slug === slug)
  return language ?? languageOptions.find((it) => it.slug === fallbackSlug)!
}

export function useTranslation() {
  const { slug } = useLocal()
  return translations[slug]
}

/**
 * Returns personal info merged with translatable fields (name, job title).
 * Non-translatable fields (phone, email, github, x) come from config.
 */
export function usePersonalInfo() {
  const t = useTranslation()
  return useMemo(
    () => ({
      ...personalInfo,
      firstName: t.personal.firstName,
      lastName: t.personal.lastName,
      jobTitle: t.personal.jobTitle,
    }),
    [t]
  )
}
