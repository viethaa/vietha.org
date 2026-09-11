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
    path: '/projects',
    label: 'projects',
    description: 'things I’ve built, broken, and occasionally shipped',
  },
  {
    path: '/writing',
    label: 'writing',
    description: 'essays and half-formed thoughts, out in the open',
  },
  {
    path: '/notes',
    label: 'notes',
    description: 'songs on repeat, movies I’ve watched, notes to myself',
  },
]
