import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { posts } from '../data/writing'

export default function Writing() {
  return (
    <div>
      <SectionHeader
        title="writing"
        description="Essays and half-formed thoughts, posted whenever there's something worth saying."
      />

      <div className="mt-12 border-t" style={{ borderColor: 'var(--line)' }}>
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              to={`/writing/${post.slug}`}
              className="group flex flex-col gap-1 border-b py-6 sm:flex-row sm:items-baseline sm:justify-between"
              style={{ borderColor: 'var(--line)' }}
            >
              <div>
                <h2 className="font-display text-2xl transition-colors group-hover:text-(--accent)">
                  {post.title}
                </h2>
                <p className="mt-1 text-(--ink-soft)">{post.excerpt}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-(--ink-faint) sm:pl-6">
                {post.date}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
