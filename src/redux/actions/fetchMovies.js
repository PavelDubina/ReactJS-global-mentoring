import { SEARCH_MOVIES_PENDING, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from './actionTypes'
import { BASE_URL } from '../../utils/constants'

const fetchData = () => ({
  type: SEARCH_MOVIES_PENDING,
})

const fetchDataSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
})

const fetchDataError = (error) => ({
  type: SEARCH_MOVIES_ERROR,
  payload: error,
})

const fetchMovies = ({ sortBy = '', filter = '', search = '' }) => async (dispatch) => {
  try {
    dispatch(fetchData())
    const response = await fetch(
      `${BASE_URL}?searchBy=title&sortOrder=desc&limit=120&filter=${filter}&sortBy=${sortBy}&search=${search}`,
    )
    const movies = await response.json()
    dispatch(fetchDataSuccess({ data: movies.data, sortBy, filter, search }))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}

export default fetchMovies
