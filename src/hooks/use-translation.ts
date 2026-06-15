import { translations } from "@/lib/translations"
import { useLocal } from "@/hooks/use-local"

export function useTranslation() {
  const { slug } = useLocal()
  return translations[slug]
}
