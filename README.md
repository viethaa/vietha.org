# personal-website

Viet Ha's personal site — a content hub with `/self`, `/projects`, `/writing`, and `/notes` (a
monthly music billboard + movie shelf).

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
- `music.ts` — monthly top-3 songs for the notes billboard
- `movies.ts` — the movie shelf entries
- `writing.ts` — blog posts (title, date, excerpt, body paragraphs)

Bio text and social links (Gmail, Instagram, GitHub, LinkedIn, Discord, Spotify) live directly in
`src/pages/Self.tsx`.

## Theme

Day/night colors are CSS variables in `src/index.css` (`:root` and `[data-theme="night"]`).
Swap `--accent`, `--bg`, `--moss`, etc. to retheme the whole site.

## Build

```bash
npm run build
```
