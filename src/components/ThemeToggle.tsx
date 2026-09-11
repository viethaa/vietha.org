import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.3" />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M8 1v1.4M8 13.6V15M15 8h-1.4M2.4 8H1M12.8 3.2l-1 1M4.2 11.8l-1 1M12.8 12.8l-1-1M4.2 4.2l-1-1" />
      </g>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M13.5 9.7A6 6 0 0 1 6.3 2.5a6 6 0 1 0 7.2 7.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isNight = theme === 'night'

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isNight ? 'day' : 'night'} mode`}
      className="relative flex h-8 w-8 items-center justify-center rounded-full text-(--ink-soft) transition-colors hover:text-(--accent)"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex"
        >
          {isNight ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
