import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function groupBy<T>(
  arr: T[],
  fn: (item: T) => string
): Record<string, T[]> {
  const result: Record<string, T[] | undefined> = {}
  for (const item of arr) {
    const key = fn(item)
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(item)
  }
  return result as Record<string, T[]>
}
