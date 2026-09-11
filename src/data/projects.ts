export interface Project {
  name: string
  year: string
  description: string
  tags: string[]
  link?: string
  status: 'live' | 'in progress' | 'archived'
}

export const projects: Project[] = [
  {
    name: 'This website',
    year: '2026',
    description: 'A personal hub for projects, notes, and whatever I feel like keeping track of.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    status: 'live',
  },
  {
    name: 'Project two',
    year: '2025',
    description: 'Replace with a short, honest description of what it does and why you built it.',
    tags: ['Add', 'Your', 'Stack'],
    status: 'in progress',
  },
  {
    name: 'Project three',
    year: '2024',
    description: 'Another project slot — swap in a real link, tags, and a one-line pitch.',
    tags: ['Add', 'Your', 'Stack'],
    status: 'archived',
  },
]
