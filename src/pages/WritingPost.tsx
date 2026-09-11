import { Link, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { posts } from '../data/writing'

export default function WritingPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div>
        <SectionHeader title="not found" description="That post doesn't exist (yet)." />
        <Link to="/writing" className="underline-fade mt-8 inline-block font-mono text-sm text-(--accent)">
          back to writing
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        to="/writing"
        className="underline-fade font-mono text-xs uppercase tracking-[0.14em] text-(--ink-faint) hover:text-(--accent)"
      >
        &larr; writing
      </Link>

      <p className="mt-6 font-mono text-xs text-(--ink-faint)">{post.date}</p>
      <h1 className="font-display mt-2 text-4xl sm:text-5xl">{post.title}</h1>

      <div className="mt-8 space-y-5 text-lg text-(--ink)">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
