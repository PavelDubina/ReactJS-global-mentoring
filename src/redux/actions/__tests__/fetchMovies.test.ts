import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { EActionTypes } from '../actionTypes'
import { BASE_URL } from '../../../utils/constants'
import movies from '../../../MockedData/mockMovies.json'
import fetchMovies, { TMoviesActionTypes } from '../fetchMovies'
import { TAppState } from '../../reducers/rootReducer'

const middlewares = [thunk]
const mockStore = configureMockStore<TAppState, ThunkDispatch<TAppState, unknown, TMoviesActionTypes>>(middlewares)

describe('async action fetchMovies', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('creates SEARCH_MOVIES_SUCCESS when fetching movies has been done', async () => {
    fetchMock.getOnce(`${BASE_URL}?searchBy=title&sortOrder=desc&limit=360&filter=&sortBy=&search=`, {
      headers: { 'content-type': 'application/json' },
      body: { data: movies },
    })
    const expectedActions = [
      {
        type: EActionTypes.SEARCH_MOVIES_PENDING,
      },
      {
        type: EActionTypes.SEARCH_MOVIES_SUCCESS,
        payload: { data: movies, filter: '', sortBy: '', search: '' },
      },
    ]
    const store = mockStore()
    await store.dispatch(fetchMovies({}))
      expect(store.getActions()).toEqual(expectedActions)
  })
  it('creates SEARCH_MOVIES_ERROR when fetching movies has been error', async () => {
    fetchMock.getOnce(`${BASE_URL}?searchBy=title&sortOrder=desc&limit=360&filter=&sortBy=&search=`, {
      headers: { 'content-type': 'application/json' },
      throws: new TypeError('Failed to fetch'),
    })
    const expectedActions = [
      {
        type: EActionTypes.SEARCH_MOVIES_PENDING,
      },
      {
        type: EActionTypes.SEARCH_MOVIES_ERROR,
      },
    ]
    const store = mockStore()
    await store.dispatch(fetchMovies({}))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
