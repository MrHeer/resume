# Repository Guidelines

## Project Overview

Personal resume site built with **TanStack Start** (SSR + static prerender), deployed to **GitHub Pages** at `mrheer.github.io/resume/`. Two locales (zh-CN, en-US) rendered from Markdown. Features dark/light theme, command palette (⌘K), QR code sharing, and print-optimized layout.

## Architecture & Data Flow

```
Route Tree:
  __root__ (shell: ThemeProvider, ErrorBoundary, Devtools)
  ├── / (index → redirect to /$slug?slug=en-US)
  └── /_resume (layout: CommandPalette + Header + ScrollArea)
      └── /$slug (loader → Markdown component + JSON-LD)

Content Pipeline:
  resume/*.md → content-collections (Zod) → allResumes[]
    → $slug route loader → renderMarkdown() server fn
    → unified: remark-parse → remark-gfm → remark-rehype
    → rehype-raw → rehype-shiki (dual theme) → rehype-slug
    → rehype-autolink-headings → heading extraction
    → rehype-stringify → twemoji.parse → SVG inline → HTML
    → Markdown component (html-react-parser hydration)

Theme Flow:
  ScriptOnce (flash prevention) → useSyncExternalStore (DOM read)
    → ThemeProvider context → setTheme/toggleTheme
    → CSS: light-dark() tokens + .dark class toggle
```

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/routes/` | TanStack Start file-based routes (root, layout, slug, index) |
| `src/components/` | React components (header, markdown, theme, error, icons, twemoji) |
| `src/components/ui/` | shadcn/ui primitives (@base-ui/react + cmdk + Tailwind v4) |
| `src/components/command-palette/` | ⌘K palette (context, actions, content, types) |
| `src/hooks/` | use-local, use-translation, use-personal-info |
| `src/lib/` | config, utils (cn, groupBy), translations, tests |
| `src/server/` | Server-side markdown rendering pipeline |
| `resume/` | Markdown content files (zh-CN.md, en-US.md) with YAML frontmatter |
| `public/` | Static assets (favicon, manifest, robots) |
| `scripts/` | Post-build `fix-base-path.ts` (patches `/__tsr/` for `/resume/` base) |
| `.github/workflows/` | CI/CD: build → deploy to GitHub Pages |

## Development Commands

```bash
pnpm dev          # Vite dev server on port 3000
pnpm build        # Production build (vite build → fix-base-path)
pnpm preview      # Preview production build
pnpm test         # Vitest (unit tests)
pnpm typecheck    # tsc --noEmit
pnpm lint         # ESLint
pnpm format       # Prettier --write
pnpm check        # Prettier --check
```

**Package manager**: `pnpm@11.1.3` (enforced via `packageManager` field). Always use `pnpm install --frozen-lockfile` in CI.

## Code Conventions & Common Patterns

### TypeScript
- **strict mode** with `noUnusedLocals` and `noUnusedParameters`
- `verbatimModuleSyntax` — use `import type` for type-only imports
- Path aliases: `@/*` → `./src/*`, `content-collections` → generated types

### React Components
- **All function components**, no classes (except `ErrorBoundary` which needs `getDerivedStateFromError`)
- No default exports — all named exports
- shadcn/ui components use `@base-ui/react` (NOT Radix) with `tw-animate-css` for animations

### i18n Pattern
No library. Locale slug from route params (`$slug`) → `useLocal()` → `useTranslation()` → translations object. Translatable strings in `src/lib/translations.ts`, keyed by `LanguageSlug`. Static data in `src/lib/config.ts` (`personalInfo`).

### Server Functions
- `renderMarkdown` in `src/server/markdown.ts` is a TanStack Start server function (`createServerFn({ method: "POST" })`)
- Wrapped with `staticFunctionMiddleware` — output cached as static JSON at build time
- Validation via `.validator()` with a simple data shape check

### Theme
- CSS `light-dark()` function for all color tokens (±200 lines in `src/styles.css`)
- `.dark` class on `<html>` toggles `color-scheme: dark`
- Custom Tailwind v4 variant: `dark: (&:is(.dark *))`
- `ThemeProvider` uses `useSyncExternalStore` to read DOM on hydration, avoiding flash
- `ScriptOnce` injects inline script before hydration to apply stored/system preference

### Command Palette
- Multi-page navigation via `nextPage` → page stack; Escape/Backspace pops
- Search mode flattens all terminal actions across pages
- Hotkeys: `Mod+K` toggles palette; single-key/sequence hotkeys scoped to palette state via `@tanstack/react-hotkeys`
- Actions registry built by `useCommandActions()` hook, memoized on translations + theme

## Important Files

| File | Role |
|------|------|
| `src/routes/__root.tsx` | HTML shell, meta tags, theme/error providers, devtools |
| `src/routes/_resume.tsx` | Layout: CommandPalette + Header + ScrollArea + Outlet |
| `src/routes/_resume.$slug.tsx` | Resume page: loader, SEO head, JSON-LD, Markdown |
| `src/routes/index.tsx` | Index redirect (`throw redirect()` to fallback locale) |
| `src/server/markdown.ts` | unified pipeline + twemoji inline (40+ lines of plugin chain) |
| `src/components/markdown.tsx` | html-react-parser hydration with custom element handlers |
| `src/components/header.tsx` | Sticky header: language menu, share dialog, theme, cmd palette |
| `src/components/theme-provider.tsx` | Theme context: DOM sync, localStorage, system fallback |
| `src/lib/translations.ts` | All translatable UI strings (share dialog, palette, header, errors) |
| `src/lib/config.ts` | languageOptions, personalInfo, fallbackSlug |
| `src/styles.css` | Tailwind v4 + shadcn tokens + markdown-body + print media queries |
| `vite.config.ts` | base path, plugins, prerender config, dynamic page discovery |
| `content-collections.ts` | Zod schema for resume frontmatter, slug extraction |
| `scripts/fix-base-path.ts` | Post-build patch for `/__tsr/` → `/resume/__tsr/` |
| `.github/workflows/deploy.yml` | CI: typecheck → test → build → deploy to Pages |

## Runtime/Tooling Preferences

- **Node**: 22 (CI), local latest LTS
- **Package manager**: pnpm only (workspace + frozen lockfile)
- **Build**: Vite 8 with `@vitejs/plugin-react` (NOT Babel)
- **CSS**: Tailwind v4 (CSS-first config, `@tailwindcss/vite` plugin, NO `tailwind.config.ts`)
- **UI primitives**: `@base-ui/react` (NOT Radix UI) — Dialog, Menu, Tabs, Button
- **Animations**: `tw-animate-css` (Tailwind v4 animation plugin)
- **Syntax highlighting**: Shiki via `@shikijs/rehype` with `light-dark()` defaultColor
- **Formatting**: Prettier + `prettier-plugin-tailwindcss` (double quotes, no semis, trailing commas)
- **Linting**: ESLint flat config extending `@tanstack/eslint-config`

## Testing & QA

- **Framework**: Vitest 4 + jsdom
- **Location**: `src/lib/__tests__/`
- **Pattern**: `describe`/`it`/`expect`, pure functions, no mocks
- **Coverage target**: utility functions (`cn`, `groupBy`)
- **CI gate**: `pnpm test` runs before build in deploy workflow
- **Type gate**: `pnpm typecheck` runs before test in deploy workflow
- No component or integration tests currently exist
