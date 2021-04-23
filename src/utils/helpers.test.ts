import { getCorrectGenres, getReleaseYear, getSortQuery, getFilterQuery, createUrl } from './helpers'

describe('helpers functions', () => {
  it('from array to string genres', () => {
    expect(getCorrectGenres(['action', 'comedy'])).toBe('action & comedy')
    expect(getCorrectGenres(['action', 'comedy', 'drama'])).toBe('action, comedy, drama')
  })
  it('get year from full date', () => {
    expect(getReleaseYear('12/12/2020')).toBe(2020)
    expect(getReleaseYear('')).toBe('')
  })
  it('get correct sort query', () => {
    expect(getSortQuery('RELEASE DATE')).toBe('release_date')
    expect(getSortQuery('RATING')).toBe('vote_average')
    expect(getSortQuery('')).toBe('')
  })
  it('get correct filter query', () => {
    expect(getFilterQuery('all')).toBe('')
    expect(getFilterQuery('comedy')).toBe('comedy')
  })
  it('get correct url', () => {
    expect(createUrl('all', 'RELEASE DATE', '')).toBe(
      'http://localhost:4000/movies?searchBy=title&sortOrder=desc&limit=120&filter=&sortBy=release_date&search=',
    )
  })
})
