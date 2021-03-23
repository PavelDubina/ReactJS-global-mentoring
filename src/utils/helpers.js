export const getCorrectGenres = (genres) => (genres.length === 2 ? genres.join(' & ') : genres.join(', '))

export const getReleaseYear = (date) => {
  const correctDate = new Date(Date.parse(date))
  return correctDate.getFullYear()
}
