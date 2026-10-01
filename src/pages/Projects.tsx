import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import SectionHeader from '../components/SectionHeader'
import { ArchiveIcon, CheckIcon, PulseIcon } from '../components/StatusIcons'
import { projects, type Project, type ProjectStatus } from '../data/projects'

const sections: {
  status: ProjectStatus
  label: string
  icon: ReactNode
  color: string
}[] = [
  { status: 'in-progress', label: 'In Progress', icon: <PulseIcon />, color: 'var(--accent)' },
  { status: 'finished', label: 'Finished', icon: <CheckIcon />, color: 'var(--moss)' },
  { status: 'archived', label: 'Archived', icon: <ArchiveIcon />, color: 'var(--ink-faint)' },
]

function ProjectRow({
  project,
  index,
  dimmed,
}: {
  project: Project
  index: number
  dimmed?: boolean
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: dimmed ? 0.65 : 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group flex items-start justify-between gap-4 rounded-lg px-5 py-4 transition-colors hover:bg-[color-mix(in_srgb,var(--bg-elevated)_85%,var(--ink)_8%)]"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="min-w-0">
        <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-(--accent)">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-(--ink-soft)">{project.description}</p>
      </div>
      <span className="shrink-0 font-mono text-xs text-(--ink-faint)">{project.year}</span>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <div>
      <SectionHeader
        title="projects"
        description="Random ideas and projects I've worked on pulled from my GitHub repositories"
      />

      <div className="mt-12">
        {sections.map(({ status, label, icon, color }, si) => {
          const items = projects.filter((p) => p.status === status)
          if (items.length === 0) return null

          return (
            <section
              key={status}
              className={si > 0 ? 'mt-12 border-t pt-10' : ''}
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ color, background: `color-mix(in srgb, ${color} 16%, transparent)` }}
                >
                  {icon}
                </span>
                <h2 className="font-display text-xl font-semibold">{label}</h2>
                <span className="font-mono text-xs text-(--ink-faint)">{items.length}</span>
              </div>

              <div className="mt-4 space-y-3">
                {items.map((project, i) => (
                  <ProjectRow
                    key={project.name}
                    project={project}
                    index={i}
                    dimmed={status === 'archived'}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
