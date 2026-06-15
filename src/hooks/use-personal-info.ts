import { personalInfo } from "@/lib/config"
import { useTranslation } from "@/hooks/use-translation"
import { useMemo } from "react"

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
