import { SEARCH_MOVIES_PENDING, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from '../actions/actionTypes'

const initialState = {
  movies: [],
  sortBy: '',
  filter: '',
  search: '',
  error: null,
  isLoading: false,
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_PENDING:
      return {
        ...state,
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
      }
    case SEARCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default moviesReducer
