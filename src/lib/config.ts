export const languageOptions = [
  { slug: "zh-CN", label: "中文", icon: "🇨🇳" },
  { slug: "en-US", label: "English", icon: "🇺🇸" },
] as const

export type LanguageSlug = (typeof languageOptions)[number]["slug"]

export const fallbackSlug: LanguageSlug = "en-US"

export interface PersonalInfo {
  phone?: string
  email?: string
  github?: string
  x?: string
}

/** Non-translatable personal info (phone, email, social handles stay the same across languages) */
export const personalInfo: PersonalInfo = {
  phone: "+86 176 2303 0229",
  email: "hlm52pk@163.com",
  github: "MrHeer",
  x: "MrHeer",
}
