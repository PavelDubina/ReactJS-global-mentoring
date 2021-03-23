import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Navbar } from '../Navbar'

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
    expect(getByText('all')).toBeTruthy()
    fireEvent.click(getByText('all'))
    expect(handleMenu).toBeCalled()
    expect(getByText('all').classList.contains('active')).toBeTruthy()
  })
})
