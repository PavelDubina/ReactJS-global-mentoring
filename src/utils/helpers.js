import { navGenres } from './constants'

export const getCorrectGenres = (genres) => (genres.length === 2 ? genres.join(' & ') : genres.join(', '))
export const getReleaseYear = (date) => {
  const correctDate = new Date(Date.parse(date))
  return date ? correctDate.getFullYear() : ''
}
export const getSortQuery = (str) => {
  switch (str) {
    case 'RELEASE DATE':
      return 'release_date'
    case 'RATING':
      return 'vote_average'
    default:
      return ''
  }
}
export const getFilterQuery = (str) => (str === navGenres.all ? '' : str)
