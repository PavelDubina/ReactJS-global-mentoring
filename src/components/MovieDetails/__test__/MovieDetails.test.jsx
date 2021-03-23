import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import movie from '../../../MockedData/mockMovie.json'
import { MovieDetails } from '../MovieDetails'

const mockStore = configureStore([])

describe('MovieDetails', () => {
  const history = createMemoryHistory()
  const route = '/film/313369'
  history.push(route)
  it('Should renders correctly if movie found', () => {
    const store = mockStore({ movieData: { movie } })
    store.dispatch = jest.fn()
    const getComponent = () =>
      render(
        <Provider store={store}>
          <Router history={history}>
            <MovieDetails />
          </Router>
        </Provider>,
      )
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should renders correctly if movie not found', () => {
    const store = mockStore({ movieData: { movie: {} } })
    store.dispatch = jest.fn()

    const getComponent = () =>
      render(
        <Provider store={store}>
          <Router history={history}>
            <MovieDetails />
          </Router>
        </Provider>,
      )
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
})
