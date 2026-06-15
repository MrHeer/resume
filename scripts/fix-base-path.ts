import fs from "node:fs"
import path from "node:path"

const clientDir = path.resolve(import.meta.dirname, "../dist/client")

/**
 * TanStack Start hardcodes `/__tsr/` in its static server function cache URLs,
 * which doesn't respect Vite's `base` config. This script replaces those paths
 * with the correct base-prefixed paths for the production build.
 */
function fixBasePaths(base: string = "/") {
  if (base === "/") {
    console.log("Base is '/', no path fix needed.")
    return
  }

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (entry.isFile() && entry.name.endsWith(".js")) {
        const content = fs.readFileSync(fullPath, "utf-8")
        const fixed = content.replace(/\/__tsr\//g, `${base}__tsr/`)
        if (fixed !== content) {
          fs.writeFileSync(fullPath, fixed, "utf-8")
          console.log(`  Fixed: ${path.relative(clientDir, fullPath)}`)
        }
      }
    }
  }

  walk(clientDir)
  console.log("Base path fix complete.")
}

const { default: config } = await import("../vite.config.ts")
fixBasePaths(config.base)
