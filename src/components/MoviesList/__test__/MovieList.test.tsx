import React from 'react'
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import movies from '../../../MockedData/mockMovies.json'
import { MovieList } from '../MovieList'

const mockStore = configureStore([])
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn(), query: { id: '3133369', query: '' } }),
}))
jest.mock('next-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (str: any) => str,
  }),
}))
describe('MovieList', () => {
  ReactDOM.createPortal = jest.fn((element: any) => element)
  const store = mockStore({
    moviesData: { movies, error: false, isLoading: false, sortBy: 'RELEASE DATE', filter: 'all' },
  })
  store.dispatch = jest.fn()
  const getComponent = () =>
    render(
      <Provider store={store}>
        <MovieList />
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
          <MovieList />
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
          <MovieList />
        </Provider>,
      )
    const { getByText } = getComponent()
    expect(getByText('Movies not found')).toBeTruthy()
  })
  it('Should handle movie details and should change pathname', () => {
    window.scrollTo = jest.fn()
    const { getByAltText } = getComponent()
    fireEvent.click(getByAltText('poster'))
    expect(useRouter().push).toBeCalled()
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
    const comedyNav = getByText('nav.genres.comedy')
    expect(comedyNav.classList.contains('active')).toBeFalsy()
    fireEvent.click(comedyNav)
    expect(comedyNav.classList.contains('active')).toBeTruthy()
  })
  it('Should call onCloseModal and getMovie, open delete modal', () => {
    const { getByText, getByTestId } = getComponent()
    const cardMenu = getByTestId('card-menu')
    fireEvent.click(cardMenu)
    const deleteModalBtn = getByText('menu.delete')
    fireEvent.click(deleteModalBtn)
    expect(getByText('deleteModal.title')).toBeTruthy()
    fireEvent.click(getByText('×'))
  })
  it('Should open edit modal', () => {
    const { getByText, getByTestId } = getComponent()
    const cardMenu = getByTestId('card-menu')
    fireEvent.click(cardMenu)
    const editModalBtn = getByText('menu.edit')
    fireEvent.click(editModalBtn)
    expect(getByText('editModal.title')).toBeTruthy()
  })
})
