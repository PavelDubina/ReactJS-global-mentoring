import { createStore } from 'redux'
import rootReducer from '../rootReducer'
import moviesReducer from '../moviesReducer'
import movieReducer from '../movieReducer'

describe('root reducer', () => {
  const store = createStore(rootReducer)
  it('should unite different reducers', () => {
    expect(store.getState().moviesData).toEqual(moviesReducer(undefined, {}))
    expect(store.getState().movieData).toEqual(movieReducer(undefined, {}))
  })
})
