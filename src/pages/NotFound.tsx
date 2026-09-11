import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="pt-16">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-(--accent)">404</p>
      <h1 className="font-display mt-4 text-4xl sm:text-5xl">nothing here</h1>
      <p className="mt-3 text-(--ink-soft)">This page doesn't exist, or moved somewhere else.</p>
      <Link to="/" className="underline-fade mt-8 inline-block font-mono text-sm text-(--accent)">
        &larr; back home
      </Link>
    </div>
  )
}
