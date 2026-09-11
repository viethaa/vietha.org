import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navEntries } from '../data/nav'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] as const } },
}

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="pt-8 sm:pt-16">
      <motion.h1 variants={item} className="font-display text-5xl leading-[1.05] sm:text-6xl">
        Viet Ha
      </motion.h1>

      <motion.nav variants={item} className="mt-12 border-t" style={{ borderColor: 'var(--line)' }}>
        {navEntries.map((entry) => (
          <Link
            key={entry.path}
            to={entry.path}
            onMouseEnter={() => setHovered(entry.path)}
            onMouseLeave={() => setHovered(null)}
            className="group flex items-baseline justify-between border-b py-6 transition-colors"
            style={{ borderColor: 'var(--line)' }}
          >
            <span className="flex items-baseline gap-1">
              <span className="font-display text-3xl text-(--ink-faint) sm:text-4xl">/</span>
              <span className="font-display text-3xl transition-colors group-hover:text-(--accent) sm:text-4xl">
                {entry.label}
              </span>
            </span>

            <span
              className="hidden max-w-[16rem] text-right font-mono text-xs text-(--ink-soft) transition-all duration-300 sm:block"
              style={{
                opacity: hovered === entry.path ? 1 : 0,
                transform: hovered === entry.path ? 'translateX(0)' : 'translateX(8px)',
              }}
            >
              {entry.description}
            </span>

            <span
              aria-hidden
              className="font-display ml-3 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-(--accent)"
            >
              &rarr;
            </span>
          </Link>
        ))}
      </motion.nav>
    </motion.div>
  )
}
