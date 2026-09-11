export interface Song {
  title: string
  artist: string
}

export interface MonthlyBillboard {
  month: string
  year: number
  songs: [Song, Song, Song]
}

export const billboard: MonthlyBillboard[] = [
  {
    month: 'September',
    year: 2026,
    songs: [
      { title: 'Song One', artist: 'Artist Name' },
      { title: 'Song Two', artist: 'Another Artist' },
      { title: 'Song Three', artist: 'Someone Else' },
    ],
  },
  {
    month: 'August',
    year: 2026,
    songs: [
      { title: 'Song Four', artist: 'Artist Name' },
      { title: 'Song Five', artist: 'Another Artist' },
      { title: 'Song Six', artist: 'Someone Else' },
    ],
  },
  {
    month: 'July',
    year: 2026,
    songs: [
      { title: 'Song Seven', artist: 'Artist Name' },
      { title: 'Song Eight', artist: 'Another Artist' },
      { title: 'Song Nine', artist: 'Someone Else' },
    ],
  },
]
