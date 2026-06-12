import { fallbackLanguage, languages } from "@/lib/config"
import { useParams } from "@tanstack/react-router"

export function useLocal() {
  const { slug } = useParams({ strict: false })
  const language = languages.find((it) => it.slug === slug)
  return language ?? languages.find((it) => it.slug === fallbackLanguage)!
}
