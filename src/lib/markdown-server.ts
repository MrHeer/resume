import { createServerFn } from "@tanstack/react-start"
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions"
import { renderMarkdown } from "./markdown"
import type { MarkdownResult } from "./markdown"

/**
 * Server function that renders markdown content.
 * Uses staticFunctionMiddleware to cache the result as a static JSON file
 * during build-time prerendering.
 *
 * This way:
 * - Each language's rendered HTML is a separate static JSON file
 * - Client only fetches the file for the language they switch to
 * - No heavy Shiki/unified deps in client bundle
 */
export const renderMarkdownServer = createServerFn({ method: "POST" })
  .middleware([staticFunctionMiddleware])
  .validator((data: { content: string }) => data)
  .handler(async ({ data }): Promise<MarkdownResult> => {
    return renderMarkdown(data.content)
  })
