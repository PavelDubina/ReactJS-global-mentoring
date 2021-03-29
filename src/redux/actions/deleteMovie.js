import fetchMovies from './fetchMovies'
import { BASE_URL } from '../../utils/constants'

const deleteMovie = (id) => async (dispatch, getState) => {
  const { sortBy, filter, search } = getState().moviesData
  try {
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    if (response.status === 204) {
      dispatch(fetchMovies({ sortBy, filter, search }))
    }
  } catch (error) {
    console.log(error)
  }
}

export default deleteMovie
