import { SEARCH_MOVIES_PENDING, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from '../actions/actionTypes'
import { sortingValues, navGenres } from '../../utils/constants'

const initialState = {
  movies: [],
  sortBy: sortingValues.RELEASE_DATE,
  filter: navGenres.all,
  search: '',
  error: false,
  isLoading: false,
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      }
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        sortBy: action.payload.sortBy,
        filter: action.payload.filter,
        search: action.payload.search,
        error: !action.payload.data.length,
      }
    case SEARCH_MOVIES_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    default:
      return state
  }
}

export default moviesReducer
