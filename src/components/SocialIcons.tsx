import type { ReactNode } from 'react'

function IconBase({ children }: { children: ReactNode }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      {children}
    </svg>
  )
}

export function GmailIcon() {
  return (
    <IconBase>
      <rect x="1.25" y="3.25" width="13.5" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 4.2 8 8.6l6-4.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  )
}

export function InstagramIcon() {
  return (
    <IconBase>
      <rect x="1.5" y="1.5" width="13" height="13" rx="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="11.6" cy="4.4" r="0.8" fill="currentColor" />
    </IconBase>
  )
}

export function GithubIcon() {
  return (
    <IconBase>
      <path
        d="M8 1.2c-3.76 0-6.8 3.05-6.8 6.8 0 3.01 1.95 5.56 4.65 6.46.34.06.46-.15.46-.33v-1.28c-1.89.41-2.29-.82-2.29-.82-.31-.79-.76-1-.76-1-.62-.43.05-.42.05-.42.69.05 1.05.71 1.05.71.61 1.04 1.59.74 1.98.57.06-.44.24-.74.43-.91-1.51-.17-3.1-.76-3.1-3.37 0-.74.26-1.35.7-1.83-.07-.17-.3-.87.07-1.81 0 0 .57-.18 1.87.7a6.4 6.4 0 0 1 3.4 0c1.3-.88 1.87-.7 1.87-.7.37.94.14 1.64.07 1.81.44.48.7 1.09.7 1.83 0 2.62-1.59 3.2-3.11 3.37.25.21.46.63.46 1.27 0 .92-.01 1.66-.01 1.88 0 .18.12.4.47.33A6.8 6.8 0 0 0 14.8 8c0-3.75-3.04-6.8-6.8-6.8Z"
        fill="currentColor"
      />
    </IconBase>
  )
}

export function LinkedinIcon() {
  return (
    <IconBase>
      <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="5.1" cy="5.3" r="0.9" fill="currentColor" />
      <path d="M5.1 7.6v4.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M7.7 11.9V8.7c0-.9.6-1.5 1.5-1.5s1.4.6 1.4 1.5v3.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}

export function DiscordIcon() {
  return (
    <IconBase>
      <rect x="1.5" y="4.5" width="13" height="8" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 4.5 5.7 2.3M11.5 4.5 10.3 2.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="5.6" cy="8.4" r="1" fill="currentColor" />
      <circle cx="10.4" cy="8.4" r="1" fill="currentColor" />
    </IconBase>
  )
}

export function SpotifyIcon() {
  return (
    <IconBase>
      <circle cx="8" cy="8" r="6.6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.8 6.3c2-.5 4.4-.4 6.2.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4.9 8.5c1.6-.4 3.6-.3 5.1.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M5.1 10.6c1.2-.3 2.7-.2 3.8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </IconBase>
  )
}
