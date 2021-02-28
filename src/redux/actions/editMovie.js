import fetchMovies from './fetchMovies'
import { BASE_URL } from '../../utils/constants'

const editMovie = (content) => async (dispatch, getState) => {
  const { sortBy, filter } = getState().moviesData
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    })
    if (response.status === 200) {
      dispatch(fetchMovies({ sortBy, filter }))
    }
  } catch (error) {
    console.log(error)
  }
}

export default editMovie
