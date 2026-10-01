# personal-website

Viet Ha's personal site — a content hub with `/self`, `/projects`, `/research` (write-ups and
experiments), and `/photography`.

Built with React, TypeScript, Vite, Tailwind CSS v4, React Router, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Editing content

Everything you'd actually want to change lives in `src/data/`, as plain typed arrays:

- `nav.ts` — the home-page nav entries (labels + descriptions)
- `projects.ts` — project cards
- `research.ts` — research entries (title, date, abstract, body paragraphs)
- `photography.ts` — photo gallery entries (swap the generated placeholder tiles for real
  images by rendering an `<img>` in `src/pages/Photography.tsx` once you have photos to add)

Bio text, the contact email, and social links (Instagram, GitHub, LinkedIn, Spotify) live
directly in `src/pages/Self.tsx`.

## Theme

Day/night colors are CSS variables in `src/index.css` (`:root` and `[data-theme="night"]`).
Swap `--accent`, `--bg`, `--moss`, etc. to retheme the whole site.

## Build

```bash
npm run build
```
