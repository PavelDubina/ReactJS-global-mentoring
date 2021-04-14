export type TMovieState = {
  movie: TMovie
  error: null | string
  isLoading: Boolean
}

export type TMovie = {
  title: string
  tagline?: string
  vote_average: number
  vote_count: number
  release_date: string
  poster_path: string
  overview: string
  budget?: number
  revenue?: number
  runtime: number | string
  genres: string[]
  id: number
}

export type TAddedMovie = {
  title: string
  release_date: string
  poster_path: string
  overview: string
  runtime: number | string
  genres: string[]
}

export type TMovies = {
  movies: TMovie[]
  sortBy: string
  filter: string
  search: string
  error: boolean
  isLoading: boolean
}
