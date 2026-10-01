import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SectionHeader from '../components/SectionHeader'
import { photos } from '../data/photography'

function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3 2.2v7.6a.6.6 0 0 0 .92.5l6-3.8a.6.6 0 0 0 0-1l-6-3.8A.6.6 0 0 0 3 2.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  const d = direction === 'left' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'
  return (
    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Slideshow({ startIndex, onClose }: { startIndex: number; onClose: () => void }) {
  const [index, setIndex] = useState(startIndex)

  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), [])

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next, index])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, next, prev])

  const photo = photos[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
      style={{ background: 'rgba(10, 10, 10, 0.92)' }}
    >
      <button
        onClick={onClose}
        aria-label="Close slideshow"
        className="absolute right-3 top-3 p-3 text-white/60 transition-colors hover:text-white"
      >
        <CloseIcon />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Previous photo"
        className="absolute left-0 p-4 text-white/50 transition-colors hover:text-white sm:left-4"
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Next photo"
        className="absolute right-0 p-4 text-white/50 transition-colors hover:text-white sm:right-4"
      >
        <ChevronIcon direction="right" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={photo.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="flex max-h-[80vh] max-w-[90vw] flex-col items-center"
        >
          <img
            src={photo.src}
            alt={photo.location}
            className="max-h-[75vh] max-w-full rounded-lg object-contain"
          />
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-white/70">
            {photo.location}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 flex gap-1.5">
        {photos.map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full transition-colors"
            style={{ background: i === index ? 'white' : 'rgba(255,255,255,0.3)' }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Photography() {
  const [slideshow, setSlideshow] = useState<number | null>(null)

  return (
    <div>
      <SectionHeader title="photography" />

      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="max-w-lg text-(--ink-soft) sm:text-lg">Snapshots taken by me.</p>
        <button
          onClick={() => setSlideshow(0)}
          className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-(--ink-faint) transition-colors hover:text-(--accent)"
        >
          <PlayIcon />
          Slideshow
        </button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-10">
        {photos.map((photo, i) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            className="group m-0 cursor-pointer"
            onClick={() => setSlideshow(i)}
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
              <img
                src={photo.src}
                alt={photo.location}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] text-(--ink-faint)">
              {photo.location}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {createPortal(
        <AnimatePresence>
          {slideshow !== null && (
            <Slideshow startIndex={slideshow} onClose={() => setSlideshow(null)} />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}
