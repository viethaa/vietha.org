import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { entries } from '../data/research'

export default function Research() {
  return (
    <div>
      <SectionHeader title="research" />

      <div className="mt-12 border-t" style={{ borderColor: 'var(--line)' }}>
        {entries.map((entry, i) => (
          <motion.div
            key={entry.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              to={`/research/${entry.slug}`}
              className="group -mx-4 flex flex-col gap-2 border-b px-4 py-9 transition-colors hover:bg-(--bg-elevated) sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              style={{ borderColor: 'var(--line)' }}
            >
              <h2 className="font-display text-2xl leading-snug transition-colors group-hover:text-(--accent) sm:text-[1.7rem]">
                {entry.title}
              </h2>
              <span className="shrink-0 font-mono text-xs text-(--ink-faint)">{entry.date}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
