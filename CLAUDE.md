# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check + production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

No test framework is configured.

## Architecture

Single-page app with a custom hash-free client-side router (`src/hooks/useRouter.ts`). React Router DOM is installed but not used — routing is done manually via `window.history.pushState`. `App.tsx` reads `window.location.pathname` and renders either the home page sections or `ProjectPage` based on whether the path matches `/projects/:id`.

**Light/dark mode** is a single boolean state in `App.tsx` that swaps CSS variable values via a `.light-mode` class on the root div. All colors are derived from `--color-black` and `--color-white` tokens, which invert in light mode.

### Adding a project

1. Create `src/data/projects/<slug>.ts` exporting a `Project` object (see `src/data/types.ts` for the schema)
2. Import and add it to the `PROJECTS` array in `src/data/index.ts` — order controls landing page order and Prev/Next navigation

Project images go in `/public/` and are referenced as absolute paths (e.g. `/images/scania-1.jpg`).

### CSS conventions

- All tokens are in `src/styles/tokens.css` and imported once at the top of `src/index.css`
- Each component has a paired CSS file in `src/styles/` — no CSS modules, no Tailwind
- Grey is always `var(--color-white-60/40/20/10)` — never a separate hex colour
- Font sizes use `clamp()` for fluid responsive scaling; don't add breakpoint overrides for type
- Horizontal page padding: `var(--space-page)` (clamps 24px → 60px)
- The `.body-small` utility class applies 14px uppercase + letter-spacing
