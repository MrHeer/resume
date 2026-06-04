import parse, { domToReact, Element } from "html-react-parser"
import type { HTMLReactParserOptions } from "html-react-parser"
import { renderMarkdown } from "@/lib/markdown"
import type { MarkdownResult } from "@/lib/markdown"
import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"

type MarkdownProps = {
  content: string
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  const [result, setResult] = useState<MarkdownResult | null>(null)

  useEffect(() => {
    renderMarkdown(content).then(setResult)
  }, [content])

  if (!result) {
    return <div className={className}>Loading...</div>
  }

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        // Customize rendering of specific elements
        if (domNode.name === "a") {
          // Handle links
          const href = domNode.attribs.href
          if (href.startsWith("/")) {
            // Internal link - use your router's Link component
            return (
              <Link to={href}>
                {domToReact(domNode.children as any, options)}
              </Link>
            )
          }
        }

        if (domNode.name === "img") {
          // Add lazy loading to images
          return (
            <img
              {...domNode.attribs}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          )
        }
      }
    },
  }

  return <div className={className}>{parse(result.markup, options)}</div>
}
