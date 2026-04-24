# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at http://localhost:5173
npm run build      # Production build
npm run lint       # ESLint (0 warnings allowed)
npm run format     # Prettier
```

No test runner is configured.

## Environment Variables

All Vite public env vars use the `VITE_` prefix (`import.meta.env.VITE_*`):

| Variable | Purpose |
|---|---|
| `VITE_ROOT` | Base URL for PHP backend (e.g. `https://example.com/`) |
| `VITE_NAME` | Site identifier sent in form submissions |
| `VITE_TOKEN_TRACKING` | Token for the driv.in tracking iframe |
| `VITE_RECAPTCHA_KEY` | Google reCAPTCHA v3 site key |

## Architecture

**Stack**: React 19 · Vite 6 (SWC) · React Router DOM 7 · Bootstrap 5 · Formik · Axios · AOS  
**Language**: JavaScript (JSX only — no TypeScript)  
**Path alias**: `@` → `src/`

### CSS approach (mixed — respect what each file uses)

- **CSS Modules** (`.module.css`) — `Formulario`, `Hero`, `CardServicios`, `Accordion`
- **Plain CSS** — most page and component files, co-located with their component
- **Bootstrap 5** — layout grid, utility classes; imported globally

### State management

`StoreContext` / `StoreProvider` expose: `message`, `setMessage`, `isMobile`, `setIsMobile`, `textAreaRef`. Wrap consuming components with `useContext(StoreContext)`.

### Static data

All content arrays live in `src/data/*.json`. Access them exclusively through the helpers in `src/utils/dataUtils.js` (`getServicios`, `getServicioSoluciones`, `getCardsFeatured`, etc.).

### Contact form

`Formulario` uses Formik + reCAPTCHA v3 (`react19-google-recaptcha-v3`). On submit it POSTs to `${VITE_ROOT}php/process.php` via Axios. Validation logic is in `src/utils/dataUtils.js → validation()`.

### Scroll animations

Components use `data-aos="fade-up"` (and variants). AOS is initialized once in `src/assets/js/app.js`. Do not add `data-aos` attributes to elements that render immediately above the fold.

### Header behaviour

`Header.jsx` listens to `window.scroll`. Past 100 px it adds class `fixed` to the `<header>` element and swaps `logo-large.svg` → `logo-small.svg`.

## Conventions

- **Prettier**: no semicolons, single quotes, JSX single quotes, no parens on single-arrow-function args.
- **`no-unused-vars`**: variables matching `/^[A-Z_]/` are exempt (used for capitalized component names imported but not directly referenced).
- The typo `traking` (missing 'c') is intentional and established across `Tracking.jsx`, `traking.css` and all related class names — do not rename.
- Images are imported as ES module URLs or via `getImageURL(name)` helper from `dataUtils.js` — never use public-folder paths for assets.
