import { SEARCH_MOVIES_PENDING, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from './actionTypes'
import { BASE_URL } from '../../utils/constants'
import { getSortQuery, getFilterQuery } from '../../utils/helpers'

const fetchData = () => ({
  type: SEARCH_MOVIES_PENDING,
})

export const fetchDataSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
})

const fetchDataError = () => ({
  type: SEARCH_MOVIES_ERROR,
})

const fetchMovies = ({ sortBy = '', filter = '', search = '' }) => async (dispatch) => {
  try {
    dispatch(fetchData())
    const response = await fetch(
      `${BASE_URL}?searchBy=title&sortOrder=desc&limit=360&filter=${getFilterQuery(filter)}&sortBy=${getSortQuery(
        sortBy,
      )}&search=${search}`,
    )
    const movies = await response.json()
    dispatch(fetchDataSuccess({ data: movies.data, sortBy, filter }))
  } catch (error) {
    dispatch(fetchDataError())
  }
}

export default fetchMovies
