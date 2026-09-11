import { Link } from 'react-router-dom'
import { billboard } from '../../data/music'
import { movies } from '../../data/movies'
import { swatch } from '../../utils/color'

export default function NotesOverview() {
  const latestMonth = billboard[0]
  const latestMovie = movies[0]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Link
        to="/notes/music"
        className="group rounded-xl border p-6 transition-colors hover:border-(--accent)"
        style={{ borderColor: 'var(--line)', background: 'var(--bg-elevated)' }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-(--ink-faint)">
          {latestMonth.month} {latestMonth.year} &middot; no. 1
        </p>
        <div className="mt-4 flex items-center gap-4">
          <div
            className="h-14 w-14 shrink-0 rounded-md"
            style={{ background: swatch(latestMonth.songs[0].title) }}
          />
          <div>
            <p className="font-display text-xl">{latestMonth.songs[0].title}</p>
            <p className="text-sm text-(--ink-soft)">{latestMonth.songs[0].artist}</p>
          </div>
        </div>
        <p className="mt-6 font-display text-lg text-(--ink-soft) group-hover:text-(--accent)">
          see the full billboard &rarr;
        </p>
      </Link>

      <Link
        to="/notes/movies"
        className="group rounded-xl border p-6 transition-colors hover:border-(--accent)"
        style={{ borderColor: 'var(--line)', background: 'var(--bg-elevated)' }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-(--ink-faint)">
          last watched
        </p>
        <div className="mt-4 flex items-center gap-4">
          <div
            className="flex h-14 w-10 shrink-0 items-center justify-center rounded-md font-display text-lg text-white"
            style={{ background: swatch(latestMovie.title) }}
          >
            {latestMovie.title.charAt(0)}
          </div>
          <div>
            <p className="font-display text-xl">{latestMovie.title}</p>
            <p className="text-sm text-(--ink-soft)">
              {latestMovie.year} &middot; {latestMovie.genre}
            </p>
          </div>
        </div>
        <p className="mt-6 font-display text-lg text-(--ink-soft) group-hover:text-(--accent)">
          see the full shelf &rarr;
        </p>
      </Link>
    </div>
  )
}
