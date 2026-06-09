import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import contentCollections from "@content-collections/vite"
import fs from "node:fs"
import path from "node:path"

const resumeDir = path.resolve(__dirname, "resume")
const pages = fs
  .readdirSync(resumeDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => ({ path: `/${path.basename(file, ".md")}` }))

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    contentCollections(),
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      pages,
    }),
    viteReact(),
  ],
})

export default config
