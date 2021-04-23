import { navGenres, BASE_URL } from './constants'

export const getCorrectGenres = (genres: string[]) => (genres.length === 2 ? genres.join(' & ') : genres.join(', '))
export const getReleaseYear = (date: string) => {
  const correctDate = new Date(Date.parse(date))
  return date ? correctDate.getFullYear() : ''
}
export const getSortQuery = (str: string) => {
  switch (str) {
    case 'RELEASE DATE':
      return 'release_date'
    case 'RATING':
      return 'vote_average'
    default:
      return ''
  }
}
export const getFilterQuery = (str: string) => (str === navGenres.all ? '' : str)

export const createUrl = (filter: string, sortBy: string, search: string) =>
  `${BASE_URL}?searchBy=title&sortOrder=desc&limit=120&filter=${getFilterQuery(filter)}&sortBy=${getSortQuery(
    sortBy,
  )}&search=${search}`
