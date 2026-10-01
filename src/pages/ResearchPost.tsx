import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { entries } from '../data/research'

function DocumentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 1.5h5.5L12.5 4.5v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M9.5 1.5V4.5H12.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 3l10 10M13 3 3 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PdfNoteModal({ note, onClose }: { note: string; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: 'color-mix(in srgb, var(--ink) 45%, transparent)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 6, scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-sm rounded-xl border p-6"
        style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-(--ink-faint) transition-colors hover:text-(--accent)"
        >
          <CloseIcon />
        </button>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--ink-faint)">
          Not available yet
        </p>
        <p className="mt-3 pr-4 text-(--ink-soft)">{note}</p>
      </motion.div>
    </motion.div>
  )
}

function PdfButton({ pdfUrl, pdfNote }: { pdfUrl?: string; pdfNote?: string }) {
  const [open, setOpen] = useState(false)

  const buttonClass =
    'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-(--ink-soft) transition-colors hover:border-(--accent) hover:text-(--accent)'
  const buttonStyle = { borderColor: 'var(--line-strong)', background: 'var(--bg-elevated)' }

  if (pdfUrl) {
    return (
      <a href={pdfUrl} target="_blank" rel="noreferrer" className={buttonClass} style={buttonStyle}>
        <DocumentIcon />
        View PDF
      </a>
    )
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={buttonClass} style={buttonStyle}>
        <DocumentIcon />
        View PDF
      </button>
      {createPortal(
        <AnimatePresence>
          {open && pdfNote && <PdfNoteModal note={pdfNote} onClose={() => setOpen(false)} />}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}

export default function ResearchPost() {
  const { slug } = useParams()
  const entry = entries.find((e) => e.slug === slug)

  if (!entry) {
    return (
      <div>
        <SectionHeader title="not found" description="That paper doesn't exist (yet)." />
        <Link to="/research" className="underline-fade mt-8 inline-block font-mono text-sm text-(--accent)">
          back to research
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        to="/research"
        className="underline-fade font-mono text-xs uppercase tracking-[0.14em] text-(--ink-faint) hover:text-(--accent)"
      >
        &larr; research
      </Link>

      <h1 className="font-display mt-6 text-4xl sm:text-5xl">{entry.title}</h1>

      <p className="mt-3 font-mono text-xs text-(--ink-faint)">{entry.date}</p>

      <div className="mt-8 border-t pt-6" style={{ borderColor: 'var(--line)' }}>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--ink-faint)">
          Abstract
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-(--ink-soft)">{entry.abstract}</p>
      </div>

      <div className="mt-8">
        <PdfButton pdfUrl={entry.pdfUrl} pdfNote={entry.pdfNote} />
      </div>
    </div>
  )
}
