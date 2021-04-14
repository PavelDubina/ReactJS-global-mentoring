import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Navbar } from '../Navbar'

jest.mock('next-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (str: any) => str,
  }),
}))

describe('Navbar', () => {
  const getComponent = ({
    genreValue = 'all',
    sortValue = 'release_date',
    toggleSortValue = jest.fn(),
    handleMenu = jest.fn(),
  }) =>
    render(
      <Navbar
        handleMenu={handleMenu}
        toggleSortValue={toggleSortValue}
        sortValue={sortValue}
        genreValue={genreValue}
      />,
    )
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('handleMenu have been called and elenement has class active', () => {
    const handleMenu = jest.fn()
    const { getByText } = getComponent({ handleMenu })
    expect(getByText('nav.genres.all')).toBeTruthy()
    fireEvent.click(getByText('nav.genres.all'))
    expect(handleMenu).toBeCalled()
    expect(getByText('nav.genres.all').classList.contains('active')).toBeTruthy()
  })
})
