import { motion } from 'framer-motion'
import { billboard } from '../../data/music'
import { swatch } from '../../utils/color'

export default function MusicBillboard() {
  return (
    <div className="space-y-14">
      {billboard.map((month, mi) => (
        <section key={`${month.month}-${month.year}`}>
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-(--ink-faint)">
            {month.month} {month.year}
          </h2>

          <div className="mt-4 space-y-3">
            {month.songs.map((song, i) => (
              <motion.div
                key={song.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (mi * 3 + i) * 0.04 }}
                className="flex items-center gap-4 rounded-lg border p-3"
                style={{ borderColor: 'var(--line)' }}
              >
                <span className="font-display w-6 text-center text-2xl text-(--ink-faint)">
                  {i + 1}
                </span>
                <div className="h-12 w-12 shrink-0 rounded-md" style={{ background: swatch(song.title) }} />
                <div className="min-w-0">
                  <p className="font-display truncate text-lg">{song.title}</p>
                  <p className="truncate text-sm text-(--ink-soft)">{song.artist}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
