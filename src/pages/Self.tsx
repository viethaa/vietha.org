import SectionHeader from '../components/SectionHeader'
import { GithubIcon, InstagramIcon, LinkedinIcon, SpotifyIcon } from '../components/SocialIcons'

const socialLinks = [
  { label: 'instagram', href: 'https://www.instagram.com/bobbhaa_/', Icon: InstagramIcon },
  { label: 'github', href: 'https://github.com/viethaa', Icon: GithubIcon },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/viet-ha-255374364/',
    Icon: LinkedinIcon,
  },
  {
    label: 'spotify',
    href: 'https://open.spotify.com/playlist/42ohWNnonU6kJNrqLBtmYX?si=f702481c21da488e',
    Icon: SpotifyIcon,
  },
]

export default function Self() {
  return (
    <div>
      <SectionHeader
        title="self"
        description="A few honest sentences about who I am, written by me, for anyone curious enough to read this far."
      />

      <div className="mt-12 max-w-2xl space-y-6 break-words text-(--ink) sm:text-lg">
        <p>
          Hi there! I'm Viet — some people call me Bob. I'm 17, currently a senior at Concordia
          Hanoi, and applying to universities in the U.S. to study Machine Learning and AI
          Engineering.
        </p>
        <p>
          I've been teaching myself full-stack and software development since 6th grade, but I've
          since pushed past that. These days I'm mostly interested in machine learning, and more
          recently, cybersecurity.
        </p>
        <p>
          Outside of that, I'm an avid music listener, I play football and watch MMA, and I'll
          play just about any game on the internet. If you've got a project idea or just want to
          talk, feel free to reach out!
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
        className="mt-16 grid grid-cols-2 gap-x-6 gap-y-4 border-t pt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8"
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
