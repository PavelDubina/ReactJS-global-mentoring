import movieReducer from '../movieReducer'
import * as types from '../../actions/actionTypes'

describe('movies reducer', () => {
  const initialState = {
    movie: {},
    error: null,
    isLoading: false,
  }
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState)
  })
  it('should handle SEARCH_MOVIE_PENDING', () => {
    const action = {
      type: types.SEARCH_MOVIE_PENDING,
    }
    expect(movieReducer(initialState, action)).toEqual({ ...initialState, isLoading: true })
  })
  it('should handle SEARCH_MOVIE_SUCCESS', () => {
    const action = {
      type: types.SEARCH_MOVIE_SUCCESS,
      payload: { test: 'test field' },
    }
    expect(movieReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      movie: action.payload,
    })
  })
  it('should handle SEARCH_MOVIE_ERROR', () => {
    const action = {
      type: types.SEARCH_MOVIE_ERROR,
      payload: 'error',
    }
    expect(movieReducer(initialState, action)).toEqual({ ...initialState, isLoading: false, error: action.payload })
  })
})
