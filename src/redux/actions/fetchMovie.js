import { SEARCH_MOVIE_PENDING, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_ERROR } from './actionTypes'
import { BASE_URL } from '../../utils/constants'

const fetchData = () => ({
  type: SEARCH_MOVIE_PENDING,
})

const fetchDataSuccess = (payload) => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload,
})

const fetchDataError = (error) => ({
  type: SEARCH_MOVIE_ERROR,
  payload: error,
})

const fetchMovie = (id) => async (dispatch) => {
  try {
    dispatch(fetchData())
    const response = await fetch(`${BASE_URL}/${id}`)
    const movie = await response.json()
    dispatch(fetchDataSuccess(movie))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}

export default fetchMovie
