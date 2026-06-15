import { fallbackSlug, languageOptions } from "@/lib/config"
import { useParams } from "@tanstack/react-router"

export function useLocal() {
  const { slug } = useParams({ strict: false })
  const language = languageOptions.find((it) => it.slug === slug)
  return language ?? languageOptions.find((it) => it.slug === fallbackSlug)!
}
