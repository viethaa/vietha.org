export interface Movie {
  title: string
  year: string
  watchedOn: string
  rating: number
  genre: string
}

export const movies: Movie[] = [
  { title: 'Movie Title One', year: '2024', watchedOn: 'Sep 2026', rating: 5, genre: 'Drama' },
  { title: 'Movie Title Two', year: '2023', watchedOn: 'Sep 2026', rating: 4, genre: 'Sci-Fi' },
  { title: 'Movie Title Three', year: '2022', watchedOn: 'Aug 2026', rating: 3, genre: 'Comedy' },
  { title: 'Movie Title Four', year: '2021', watchedOn: 'Aug 2026', rating: 5, genre: 'Thriller' },
  { title: 'Movie Title Five', year: '2020', watchedOn: 'Jul 2026', rating: 4, genre: 'Animation' },
  { title: 'Movie Title Six', year: '2019', watchedOn: 'Jul 2026', rating: 3, genre: 'Documentary' },
]
