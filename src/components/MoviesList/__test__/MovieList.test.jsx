import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import movies from '../../../MockedData/mockMovies.json'
import { MovieList } from '../MovieList'

const mockStore = configureStore([])

describe('MovieList', () => {
  ReactDOM.createPortal = jest.fn((element) => element)
  const history = createMemoryHistory()
  history.push('/')
  const store = mockStore({
    moviesData: { movies, error: false, isLoading: false, sortBy: 'RELEASE DATE', filter: 'all' },
  })
  store.dispatch = jest.fn()
  const getComponent = () =>
    render(
      <Provider store={store}>
        <Router history={history}>
          <MovieList />
        </Router>
      </Provider>,
    )
  it('Should renders correctly', () => {
    expect(getComponent().asFragment()).toMatchSnapshot()
  })
  it('Should renders correctly with loading', () => {
    const store = mockStore({
      moviesData: { movies: [], error: false, isLoading: true, sortBy: 'RELEASE DATE', filter: 'all' },
    })
    store.dispatch = jest.fn()
    const getComponent = () =>
      render(
        <Provider store={store}>
          <Router history={history}>
            <MovieList />
          </Router>
        </Provider>,
      )
    expect(getComponent().asFragment()).toMatchSnapshot()
  })
  it('Should renders correctly with not movies error', () => {
    const store = mockStore({
      moviesData: { movies: [], error: true, isLoading: false, sortBy: 'RELEASE DATE', filter: 'all' },
    })
    store.dispatch = jest.fn()
    const getComponent = () =>
      render(
        <Provider store={store}>
          <Router history={history}>
            <MovieList />
          </Router>
        </Provider>,
      )
    const { getByText } = getComponent()
    expect(getByText('Movies not found')).toBeTruthy()
  })
  it('Should handle movie details and should change pathname', () => {
    window.scrollTo = jest.fn()
    const { getByAltText } = getComponent()
    fireEvent.click(getByAltText('poster'))
    expect(history.location.pathname).toBe(`/film/${movies[0].id}`)
  })
  it('Should call toggleSortValue', () => {
    const { getByTestId } = getComponent()
    const select = getByTestId('select')
    fireEvent.click(select)
    expect(getByTestId('RATING').classList.contains('active')).toBeFalsy()
    fireEvent.click(getByTestId('RATING'))
    expect(getByTestId('RATING').classList.contains('active')).toBeTruthy()
  })
  it('Should call handleMenu', () => {
    const { getByText } = getComponent()
    const comedyNav = getByText('comedy')
    expect(comedyNav.classList.contains('active')).toBeFalsy()
    fireEvent.click(comedyNav)
    expect(comedyNav.classList.contains('active')).toBeTruthy()
  })
  it('Should call onCloseModal and getMovie, open delete modal', () => {
    const { getByText, getByTestId } = getComponent()
    const cardMenu = getByTestId('card-menu')
    fireEvent.click(cardMenu)
    const deleteModalBtn = getByText('Delete')
    fireEvent.click(deleteModalBtn)
    expect(getByText('DELETE MOVIE')).toBeTruthy()
    fireEvent.click(getByText('×'))
  })
  it('Should open edit modal', () => {
    const { getByText, getByTestId } = getComponent()
    const cardMenu = getByTestId('card-menu')
    fireEvent.click(cardMenu)
    const editModalBtn = getByText('Edit')
    fireEvent.click(editModalBtn)
    expect(getByText('EDIT MOVIE')).toBeTruthy()
  })
})
