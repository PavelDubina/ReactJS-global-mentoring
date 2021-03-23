import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { ScrollToTop } from '../ScrollToTop'

describe('ScrollToTop', () => {
  const getComponent = () => render(<ScrollToTop />)
  it('Should renders correctly', () => {
    expect(getComponent().asFragment()).toMatchSnapshot()
  })
  it('Should be visible', () => {
    getComponent()
    fireEvent.scroll(window, { target: { scrollY: 361 } })
    expect(screen.queryByTestId('icon')).toBeInTheDocument()
  })
  it('Click on icon should call window.scrollTo', () => {
    const { getByTestId } = getComponent()
    window.scrollTo = jest.fn()
    fireEvent.scroll(window, { target: { scrollY: 361 } })
    fireEvent.click(getByTestId('icon'))
    expect(window.scrollTo).toBeCalled()
  })
  it('Should not be visible', () => {
    getComponent()
    fireEvent.scroll(window, { target: { scrollY: 359 } })
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
  })
})
