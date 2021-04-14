import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { EActionTypes } from '../actionTypes'
import { BASE_URL } from '../../../utils/constants'
import movie from '../../../MockedData/mockMovie.json'
import fetchMovie from '../fetchMovie'
import { TAppState } from '../../reducers/rootReducer'
import { TMoviesActionTypes } from '../fetchMovies'

const middlewares = [thunk]
const mockStore = configureMockStore<TAppState, ThunkDispatch<TAppState, unknown, TMoviesActionTypes>>(middlewares)

describe('async action fetchMovie', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('creates SEARCH_MOVIE_SUCCESS when fetching movie has been done', async () => {
    fetchMock.getOnce(`${BASE_URL}/313369`, {
      headers: { 'content-type': 'application/json' },
      body: movie,
    })
    const expectedActions = [
      {
        type: EActionTypes.SEARCH_MOVIE_PENDING,
      },
      {
        type: EActionTypes.SEARCH_MOVIE_SUCCESS,
        payload: movie,
      },
    ]
    const store = mockStore({})
    await store.dispatch(fetchMovie('313369'))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it('creates SEARCH_MOVIE_ERROR when fetching movie has been error', async () => {
    fetchMock.getOnce(`${BASE_URL}/313369`, {
      headers: { 'content-type': 'application/json' },
      throws: new TypeError('Failed to fetch'),
    })
    const expectedActions = [
      {
        type: EActionTypes.SEARCH_MOVIE_PENDING,
      },
      {
        type: EActionTypes.SEARCH_MOVIE_ERROR,
        payload: new TypeError('Failed to fetch'),
      },
    ]
    const store = mockStore({})
    await store.dispatch(fetchMovie('313369'))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
