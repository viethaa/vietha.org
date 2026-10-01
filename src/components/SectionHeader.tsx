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
        className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-(--ink-faint) transition-colors hover:text-(--accent)"
      >
        <span>Viet Ha</span>
        <span>/</span>
        <span className="text-(--ink-soft)">{title}</span>
      </Link>
      <h1 className="font-display mt-5 text-4xl sm:text-5xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-lg text-(--ink-soft) sm:text-lg">{description}</p>
      )}
    </div>
  )
}
