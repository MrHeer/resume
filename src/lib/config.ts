export const languageOptions = [
  { slug: "zh-CN", label: "中文", icon: "🇨🇳" },
  { slug: "en-US", label: "English", icon: "🇺🇸" },
] as const

export type LanguageSlug = (typeof languageOptions)[number]["slug"]

export const fallbackSlug: LanguageSlug = "zh-CN"

export const personalInfo = {
  firstName: "林明",
  lastName: "何",
  jobTitle: "高级前端工程师",
  phone: "+86 176 2303 0229",
  email: "hlm52pk@163.com",
  github: "MrHeer",
  x: "MrHeer",
}
