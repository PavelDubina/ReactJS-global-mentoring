import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as types from '../actionTypes'
import { BASE_URL } from '../../../utils/constants'
import movies from '../../../MockedData/mockMovies.json'
import fetchMovies from '../fetchMovies'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async action fetchMovies', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('creates SEARCH_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetchMock.getOnce(`${BASE_URL}?searchBy=title&sortOrder=desc&limit=360&filter=&sortBy=&search=`, {
      headers: { 'content-type': 'application/json' },
      body: { data: movies },
    })
    const expectedActions = [
      {
        type: types.SEARCH_MOVIES_PENDING,
      },
      {
        type: types.SEARCH_MOVIES_SUCCESS,
        payload: { data: movies, filter: '', sortBy: '' },
      },
    ]
    const store = mockStore({})
    return store.dispatch(fetchMovies({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  it('creates SEARCH_MOVIES_ERROR when fetching movies has been error', () => {
    fetchMock.getOnce(`${BASE_URL}?searchBy=title&sortOrder=desc&limit=360&filter=&sortBy=&search=`, {
      headers: { 'content-type': 'application/json' },
      throws: new TypeError('Failed to fetch'),
    })
    const expectedActions = [
      {
        type: types.SEARCH_MOVIES_PENDING,
      },
      {
        type: types.SEARCH_MOVIES_ERROR,
      },
    ]
    const store = mockStore({})
    return store.dispatch(fetchMovies({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
