import { EActionTypes } from '../actions/actionTypes'
import { TMovieActionTypes } from '../actions/fetchMovie'
import { TMovieState } from '../types'

const initialState: TMovieState = {
  movie: {
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: [''],
    id: 1,
  },
  error: null,
  isLoading: false,
}

const movieReducer = (state = initialState, action: TMovieActionTypes): TMovieState => {
  switch (action.type) {
    case EActionTypes.SEARCH_MOVIE_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case EActionTypes.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      }
    case EActionTypes.SEARCH_MOVIE_ERROR:
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
