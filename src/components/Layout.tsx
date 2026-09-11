import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import CursorGlow from './CursorGlow'
import ThemeToggle from './ThemeToggle'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <div className="grain" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col px-6 sm:px-10">
        <header className="flex items-center justify-end py-6">
          <ThemeToggle />
        </header>

        <main className="flex-1 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] as const }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
