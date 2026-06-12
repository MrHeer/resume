import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import contentCollections from "@content-collections/vite"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resumeDir = path.resolve(__dirname, "resume")
const pages = fs
  .readdirSync(resumeDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => ({ path: `/${path.basename(file, ".md")}` }))

const config = defineConfig({
  base: "/resume/",
  resolve: { tsconfigPaths: true },
  plugins: [
    contentCollections(),
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: false,
      },
      pages,
    }),
    viteReact(),
  ],
})

export default config
