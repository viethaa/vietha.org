import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'
import SectionHeader from '../../components/SectionHeader'

const tabs = [
  { to: '/notes', label: 'overview', end: true },
  { to: '/notes/music', label: 'music', end: false },
  { to: '/notes/movies', label: 'movies', end: false },
]

export default function NotesLayout() {
  return (
    <div>
      <SectionHeader
        title="notes"
        description="Small, ongoing records: what I'm listening to, what I've watched, and notes to my future self."
      />

      <nav className="mt-10 flex gap-6 border-b" style={{ borderColor: 'var(--line)' }}>
        {tabs.map((tab) => (
          <NavLink key={tab.to} to={tab.to} end={tab.end} className="relative pb-3">
            {({ isActive }) => (
              <span
                className={
                  'font-mono text-xs uppercase tracking-[0.14em] transition-colors ' +
                  (isActive ? 'text-(--accent)' : 'text-(--ink-faint) hover:text-(--ink)')
                }
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="notes-tab-underline"
                    className="absolute -bottom-px left-0 right-0 h-[2px]"
                    style={{ background: 'var(--accent)' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  )
}
