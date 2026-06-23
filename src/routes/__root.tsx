import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import appCss from "../styles.css?url"
import { useLocal } from "@/hooks/use-local"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Resume - Linming He",
      },
      {
        name: "description",
        content:
          "Linming He — Full-Stack Developer with expertise in React, TypeScript, Node.js, and cloud-native architectures.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: `${import.meta.env.BASE_URL}favicon.ico`,
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `${import.meta.env.BASE_URL}apple-touch-icon.png`,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { slug } = useLocal()
  return (
    <html lang={slug} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ErrorBoundary>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
