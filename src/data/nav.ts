export interface NavEntry {
  path: string
  label: string
  description: string
}

export const navEntries: NavEntry[] = [
  {
    path: '/self',
    label: 'self',
    description: 'a little about who I am and what I’m doing',
  },
  {
    path: '/research',
    label: 'research',
    description: 'papers, experiments, and rabbit holes',
  },
  {
    path: '/projects',
    label: 'projects',
    description: 'a running list of what I’ve been building',
  },
  {
    path: '/photography',
    label: 'photography',
    description: 'a few frames worth keeping',
  },
]
