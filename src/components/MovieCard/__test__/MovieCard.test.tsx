import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MovieCard } from '../MovieCard'

describe('MovieCard', () => {
  const getComponent = ({
    title = 'test title',
    genres = ['comedy'],
    date = '12/12/2020',
    poster = 'test src',
    id = 122,
    getMovie = jest.fn(),
    handleMovieDetails = jest.fn(),
  }) =>
    render(
      <MovieCard
        title={title}
        genres={genres}
        date={date}
        poster={poster}
        id={id}
        getMovie={getMovie}
        handleMovieDetails={handleMovieDetails}
      />,
    )
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should have class menu_opened', () => {
    const { getByTestId, getByText } = getComponent({})
    fireEvent.click(getByTestId('card-menu'))
    expect(getByTestId('menu').classList.contains('menu_opened')).toBeTruthy()
    fireEvent.click(getByText('menu.edit'))
    expect(getByTestId('menu').classList.contains('menu_opened')).toBeFalsy()
  })
  it('Sould to be called handleMovieDetails', () => {
    const handleMovieDetails = jest.fn()
    const { getByAltText } = getComponent({ handleMovieDetails })
    fireEvent.click(getByAltText('poster'))
    expect(handleMovieDetails).toBeCalled()
  })
})
