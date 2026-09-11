export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'starting-this-site',
    title: 'Starting this site',
    date: 'Sep 2026',
    excerpt: 'On finally building a place on the internet that is entirely mine.',
    body: [
      'This is your first post. Replace it with something real — why you built this site, what you hope to use it for, or just a note to your future self.',
      'Keep the tone conversational. Nobody expects a personal site to read like a press release.',
    ],
  },
  {
    slug: 'a-second-post',
    title: 'A second post',
    date: 'Aug 2026',
    excerpt: 'A placeholder for whatever you want to write about next.',
    body: [
      'Swap this out with real writing whenever you have something worth saying. There is no schedule to keep — that is the point of owning the page.',
    ],
  },
]
