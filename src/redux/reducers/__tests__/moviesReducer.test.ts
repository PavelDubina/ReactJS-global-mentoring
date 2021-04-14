import moviesReducer from '../moviesReducer'
import { EActionTypes } from '../../actions/actionTypes'
import { TFetchData, TFetchDataError, TFetchDataSuccess } from '../../actions/fetchMovies'

describe('movies reducer', () => {
  const initialState = {
    movies: [],
    sortBy: 'RELEASE DATE',
    filter: 'all',
    error: false,
    search: '',
    isLoading: false,
  }
  it('should handle SEARCH_MOVIES_PENDING', () => {
    const action: TFetchData = {
      type: EActionTypes.SEARCH_MOVIES_PENDING,
    }
    expect(moviesReducer(initialState, action)).toEqual({ ...initialState, isLoading: true, error: false })
  })
  it('should handle SEARCH_MOVIES_SUCCESS', () => {
    const action: TFetchDataSuccess = {
      type: EActionTypes.SEARCH_MOVIES_SUCCESS,
      payload: {
        data: [
          {
            title: 'string',
            tagline: 'string',
            vote_average: 0,
            vote_count: 0,
            release_date: 'string',
            poster_path: 'string',
            overview: 'string',
            budget: 0,
            revenue: 0,
            runtime: 0,
            genres: [''],
            id: 0,
          },
        ],
        sortBy: 'test sort',
        filter: 'test filter',
        search: 'test search',
      },
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: !action.payload.data.length,
      movies: action.payload.data,
      sortBy: action.payload.sortBy,
      search: action.payload.search,
      filter: action.payload.filter,
    })
  })
  it('should handle SEARCH_MOVIES_ERROR', () => {
    const action: TFetchDataError = {
      type: EActionTypes.SEARCH_MOVIES_ERROR,
    }
    expect(moviesReducer(initialState, action)).toEqual({ ...initialState, isLoading: false, error: true })
  })
})
