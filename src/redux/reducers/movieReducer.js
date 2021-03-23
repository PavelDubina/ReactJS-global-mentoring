import { SEARCH_MOVIE_PENDING, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_ERROR } from '../actions/actionTypes'

const initialState = {
  movie: {},
  error: null,
  isLoading: false,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      }
    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default movieReducer
