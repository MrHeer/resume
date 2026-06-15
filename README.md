# resume

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Display resume in markdown format, powered by [TanStack Start](https://tanstack.com/start) with static site generation (SSG) for optimal SEO.

## Table of Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Features

- Markdown format
- Shareable resume (link / vCard)
- **SSG (Static Site Generation)** — prerendered HTML for SEO and fast load times
- Dark mode
- Internationalization (zh-CN / en-US)
- Responsive design
- Command palette
- Printable

## Install

```sh
pnpm install
```

## Usage

### Quick Start

1. Click the **"Use this template"** button on GitHub to create your own repository.
2. Clone your new repository and install dependencies:

   ```sh
   pnpm install
   ```

3. Start the dev server:

   ```sh
   pnpm dev
   ```

   Open `http://localhost:3000` — the demo resume renders from Markdown.

### Development Commands

```sh
# Start dev server (with HMR)
pnpm dev

# Build for production (SSG — prerenders all pages to static HTML)
pnpm build

# Preview the production build locally
pnpm preview

# Format code
pnpm format

# Lint code
pnpm lint

# Type-check
pnpm typecheck

# Run tests
pnpm test
```

> `pnpm build` automatically runs the `postbuild` script (`scripts/fix-base-path.ts`) to ensure hardcoded asset paths respect the `base` config.

### Writing Your Resume

All resume content lives in the `resume/` directory as **Markdown files with YAML front matter**. Each file becomes a separate page at `/<slug>`.

1. Create a new `.md` file in the `resume/` directory (e.g., `resume/my-resume.md`).
2. Add front matter with `title` and `description` at the top:

   ```md
   ---
   title: "Resume - John Doe"
   description: "John Doe — Senior Frontend Engineer specializing in React and TypeScript."
   ---

   ## Contact

   - Email: [john@example.com](mailto:john@example.com)
   - GitHub: [johndoe](https://github.com/johndoe)

   ## Experience
   ...
   ```

3. The slug is derived from the file name (`my-resume.md` → `/my-resume`), and the page is **statically generated at build time** (SSG) for optimal SEO.

> **Tip:** You can create multiple resume files for different languages or versions. The default template includes `en-US.md` and `zh-CN.md` as an example of i18n support.

### Customizing Personal Info & UI Text

**Personal information** (phone, email, social handles) is configured in `src/lib/config.ts`:

```ts
export const personalInfo: PersonalInfo = {
  phone: "+86 176 2303 0229",
  email: "hlm52pk@163.com",
  github: "MrHeer",
  x: "MrHeer",
}
```

These values power the share dialog (vCard), command palette actions (call, email, etc.), and the homepage redirect target. They are language-independent — the same phone number and email appear regardless of the active locale.

The `fallbackSlug` field in the same file controls which resume is shown at the root URL (`/`):

```ts
export const fallbackSlug: LanguageSlug = "en-US"
```

Set this to your preferred default slug (e.g., `"my-resume"`).

**UI strings** (command palette labels, error pages, share dialog, etc.) are defined in `src/lib/translations.ts`. Each supported language has a complete translation object:

```ts
export const translations = {
  "en-US": { ... },  // English strings
  "zh-CN": { ... },  // Chinese strings
} as const satisfies Record<LanguageSlug, TranslationShape>
```

To **add a new language**:

1. Add a new slug to the `languageOptions` array in `src/lib/config.ts`:

   ```ts
   export const languageOptions = [
     { slug: "zh-CN", label: "中文", icon: "🇨🇳" },
     { slug: "en-US", label: "English", icon: "🇺🇸" },
     { slug: "ja-JP", label: "日本語", icon: "🇯🇵" },  // new
   ] as const
   ```

2. Add the corresponding translation entry in `src/lib/translations.ts`, using the `en-US` object as the reference type — TypeScript will enforce that every key is provided.

3. Create a resume `.md` file in `resume/` with the new slug as the filename (e.g., `resume/ja-JP.md`).

### How Routing Works

The app uses [TanStack Router](https://tanstack.com/router) with file-based routing:

- Each `.md` file in the `resume/` directory is collected by [Content Collections](https://www.content-collections.dev) and mapped to a URL `/<slug>` via `src/routes/_resume.$slug.tsx`.
- The root URL (`/`) redirects to the `fallbackSlug` defined in `config.ts` via a meta-refresh in `src/routes/index.tsx`.
- At build time, all pages are prerendered to static HTML files.

### Customizing the Base Path

By default, the app is configured to deploy under `/resume/` (set in `vite.config.ts`). Change this to match your deployment setup:

```ts
// vite.config.ts
export default defineConfig({
  base: "/resume/", // Change to "/" for root deployment, or "/my-resume/" for a subpath
  // ...
})
```

### Deploying to GitHub Pages

This template includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Checks out the code on every push to `main`.
2. Installs dependencies and builds the project (SSG).
3. Deploys the static output to **GitHub Pages**.

**Setup steps:**

1. Go to your repository **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push to `main` — the workflow will build and deploy automatically.

> Make sure the `base` path in `vite.config.ts` matches your repository name (e.g., `/my-resume/` if your repo is named `my-resume`).

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Content Collections](https://www.content-collections.dev)

## Maintainers

[@MrHeer](https://github.com/MrHeer)

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2022 He Linming
