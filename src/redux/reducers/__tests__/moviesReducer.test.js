import moviesReducer from '../moviesReducer'
import * as types from '../../actions/actionTypes'

describe('movies reducer', () => {
  const initialState = {
    movies: [],
    sortBy: 'RELEASE DATE',
    filter: 'all',
    error: false,
    isLoading: false,
  }
  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState)
  })
  it('should handle SEARCH_MOVIES_PENDING', () => {
    const action = {
      type: types.SEARCH_MOVIES_PENDING,
    }
    expect(moviesReducer(initialState, action)).toEqual({ ...initialState, isLoading: true, error: false })
  })
  it('should handle SEARCH_MOVIES_SUCCESS', () => {
    const action = {
      type: types.SEARCH_MOVIES_SUCCESS,
      payload: {
        data: ['test data'],
        sortBy: 'test sort',
        filter: 'test filter',
      },
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: !action.payload.data.length,
      movies: action.payload.data,
      sortBy: action.payload.sortBy,
      filter: action.payload.filter,
    })
  })
  it('should handle SEARCH_MOVIES_ERROR', () => {
    const action = {
      type: types.SEARCH_MOVIES_ERROR,
    }
    expect(moviesReducer(initialState, action)).toEqual({ ...initialState, isLoading: false, error: true })
  })
})
