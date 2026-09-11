import SectionHeader from '../components/SectionHeader'
import { GithubIcon, InstagramIcon, LinkedinIcon, SpotifyIcon } from '../components/SocialIcons'

const socialLinks = [
  { label: 'instagram', href: 'https://instagram.com/yourhandle', Icon: InstagramIcon },
  { label: 'github', href: 'https://github.com/yourhandle', Icon: GithubIcon },
  { label: 'linkedin', href: 'https://linkedin.com/in/yourhandle', Icon: LinkedinIcon },
  { label: 'spotify', href: 'https://open.spotify.com/user/yourhandle', Icon: SpotifyIcon },
]

export default function Self() {
  return (
    <div>
      <SectionHeader
        title="self"
        description="A few honest sentences about who I am, written by me, for anyone curious enough to read this far."
      />

      <div className="mt-12 space-y-6 text-(--ink) sm:text-lg">
        <p>
          Hi there! I'm Viet — some people call me Bob. I'm 17, currently a senior at Concordia
          Hanoi, and applying to universities in the U.S. to study Machine Learning or AI
          Engineering.
        </p>
        <p>
          I've been teaching myself full-stack and software development since 6th grade, but I've
          since pushed past that. These days I'm mostly interested in machine learning, and more
          recently, cybersecurity.
        </p>
        <p>
          My entertainment comes from making projects. I love using my talent to build for others.
          Feel free to reach out any time!
        </p>
        <p>
          email:{' '}
          <a
            href="mailto:vietha.icloud@gmail.com"
            className="text-(--accent) underline underline-offset-2"
          >
            vietha.icloud@gmail.com
          </a>
        </p>
      </div>

      <div
        className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-8"
        style={{ borderColor: 'var(--line)' }}
      >
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-(--ink-soft) transition-colors hover:text-(--accent)"
          >
            <Icon />
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
