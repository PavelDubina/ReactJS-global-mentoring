import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as types from '../actionTypes'
import { BASE_URL } from '../../../utils/constants'
import movie from '../../../MockedData/mockMovie.json'
import fetchMovie from '../fetchMovie'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async action fetchMovie', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('creates SEARCH_MOVIE_SUCCESS when fetching movie has been done', () => {
    fetchMock.getOnce(`${BASE_URL}/313369`, {
      headers: { 'content-type': 'application/json' },
      body: movie,
    })
    const expectedActions = [
      {
        type: types.SEARCH_MOVIE_PENDING,
      },
      {
        type: types.SEARCH_MOVIE_SUCCESS,
        payload: movie,
      },
    ]
    const store = mockStore({})
    return store.dispatch(fetchMovie(313369)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('creates SEARCH_MOVIE_ERROR when fetching movie has been error', () => {
    fetchMock.getOnce(`${BASE_URL}/313369`, {
      headers: { 'content-type': 'application/json' },
      throws: new TypeError('Failed to fetch'),
    })
    const expectedActions = [
      {
        type: types.SEARCH_MOVIE_PENDING,
      },
      {
        type: types.SEARCH_MOVIE_ERROR,
        payload: new TypeError('Failed to fetch'),
      },
    ]
    const store = mockStore({})
    return store.dispatch(fetchMovie(313369)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
