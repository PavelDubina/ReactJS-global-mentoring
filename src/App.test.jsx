import React from 'react'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import movies from './MockedData/mockMovies.json'
import movie from './MockedData/mockMovie.json'
import App from './App'

const mockStore = configureStore([])

describe('App', () => {
  const store = mockStore({ moviesData: { movies, sortBy: 'RELEASE DATE', filter: 'all' }, movieData: { movie } })
  store.dispatch = jest.fn()
  const history = createMemoryHistory()

  it('Should renders correctly with main page', () => {
    history.push('/')
    const getComponent = () =>
      render(
        <Router history={history}>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>,
      )
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should renders correctly with search page', () => {
    history.push('/search/avengers')
    const getComponent = () =>
      render(
        <Router history={history}>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>,
      )
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should renders correctly with movieDetails page', () => {
    history.push('/film/313369')
    const getComponent = () =>
      render(
        <Router history={history}>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>,
      )
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
})
