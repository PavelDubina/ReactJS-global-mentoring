import React from 'react'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import movie from '../../../MockedData/mockMovie.json'
import { MovieDetails } from '../MovieDetails'

const mockStore = configureStore([])

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ query: { id: '3133369' } }) }))

describe('MovieDetails', () => {
  it('Should renders correctly if movie found', () => {
    const store = mockStore({ movieData: { movie } })
    store.dispatch = jest.fn()
    const getComponent = () =>
      render(
        <Provider store={store}>
          <MovieDetails />
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
          <MovieDetails />
        </Provider>,
      )
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
})
