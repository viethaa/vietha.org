import { Link } from 'react-router-dom'

export default function SectionHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="pt-4 sm:pt-10">
      <Link
        to="/"
        className="underline-fade font-mono text-xs uppercase tracking-[0.14em] text-(--ink-faint) hover:text-(--accent)"
      >
        &larr; home
      </Link>
      <h1 className="font-display mt-5 text-4xl sm:text-5xl">
        <span className="text-(--ink-faint)">/</span>
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-lg text-(--ink-soft) sm:text-lg">{description}</p>
      )}
    </div>
  )
}
