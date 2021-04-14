import movieReducer from '../movieReducer'
import { EActionTypes } from '../../actions/actionTypes'
import { TFetchData, TFetchDataError, TFetchDataSuccess } from '../../actions/fetchMovie'

describe('movies reducer', () => {
  const initialState = {
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
  it('should handle SEARCH_MOVIE_PENDING', () => {
    const action: TFetchData = {
      type: EActionTypes.SEARCH_MOVIE_PENDING,
    }
    expect(movieReducer(initialState, action)).toEqual({ ...initialState, isLoading: true })
  })
  it('should handle SEARCH_MOVIE_SUCCESS', () => {
    const action: TFetchDataSuccess = {
      type: EActionTypes.SEARCH_MOVIE_SUCCESS,
      payload: {
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
    }
    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      movie: action.payload,
    })
  })
  it('should handle SEARCH_MOVIE_ERROR', () => {
    const action: TFetchDataError = {
      type: EActionTypes.SEARCH_MOVIE_ERROR,
      payload: 'error',
    }
    expect(movieReducer(initialState, action)).toEqual({ ...initialState, isLoading: false, error: action.payload })
  })
})
