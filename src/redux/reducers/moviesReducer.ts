import { EActionTypes } from '../actions/actionTypes'
import { sortingValues, navGenres } from '../../utils/constants'
import { TMovies } from '../types'
import { TMoviesActionTypes } from '../actions/fetchMovies'

const initialState: TMovies = {
  movies: [],
  sortBy: sortingValues.RELEASE_DATE,
  filter: navGenres.all,
  search: '',
  error: false,
  isLoading: false,
}

const moviesReducer = (state = initialState, action: TMoviesActionTypes) => {
  switch (action.type) {
    case EActionTypes.SEARCH_MOVIES_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true,
      }
    case EActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.data,
        sortBy: action.payload.sortBy,
        filter: action.payload.filter,
        search: action.payload.search,
        error: !action.payload.data.length,
      }
    case EActionTypes.SEARCH_MOVIES_ERROR:
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
