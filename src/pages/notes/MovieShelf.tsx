import { motion } from 'framer-motion'
import { movies } from '../../data/movies'
import { swatch } from '../../utils/color'

function Stars({ rating }: { rating: number }) {
  return (
    <span className="font-mono text-xs tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
      {'★'.repeat(rating)}
      <span style={{ color: 'var(--ink-faint)' }}>{'★'.repeat(5 - rating)}</span>
    </span>
  )
}

export default function MovieShelf() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
      {movies.map((movie, i) => (
        <motion.div
          key={movie.title}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group"
        >
          <div
            className="flex aspect-[2/3] flex-col justify-end overflow-hidden rounded-lg p-3 transition-transform duration-300 group-hover:-translate-y-1"
            style={{ background: swatch(movie.title) }}
          >
            <p className="font-display text-sm leading-tight text-white drop-shadow-sm">
              {movie.title}
            </p>
            <p className="mt-1 font-mono text-[10px] text-white/75">{movie.year}</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <Stars rating={movie.rating} />
            <span className="font-mono text-[10px] text-(--ink-faint)">{movie.watchedOn}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
