import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

const gradients = [
  'linear-gradient(135deg, var(--accent), var(--moss))',
  'linear-gradient(135deg, var(--moss), var(--bg-elevated))',
  'linear-gradient(135deg, var(--ink-faint), var(--accent))',
]

const statusColor: Record<string, string> = {
  live: 'var(--moss)',
  'in progress': 'var(--accent)',
  archived: 'var(--ink-faint)',
}

export default function Projects() {
  return (
    <div>
      <SectionHeader
        title="projects"
        description="Things I've built. Some finished, some very much not."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.65, 0, 0.35, 1] as const }}
            className="group overflow-hidden rounded-xl border"
            style={{ borderColor: 'var(--line)', background: 'var(--bg-elevated)' }}
          >
            <div
              className="h-28 w-full transition-transform duration-500 group-hover:scale-105"
              style={{ background: gradients[i % gradients.length], opacity: 0.85 }}
            />
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl">{project.name}</h2>
                <span className="font-mono text-xs text-(--ink-faint)">{project.year}</span>
              </div>

              <p className="mt-2 text-(--ink-soft)">{project.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span
                  className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-(--ink-soft)"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: statusColor[project.status] }}
                  />
                  {project.status}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-0.5 font-mono text-[11px] text-(--ink-soft)"
                    style={{ borderColor: 'var(--line)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
