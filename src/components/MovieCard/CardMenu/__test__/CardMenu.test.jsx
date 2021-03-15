import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { CardMenu } from '../CardMenu'

describe('CardMenu', () => {
  const getComponent = ({ toggleMenu = jest.fn(), isOpen = false, onOpenModal = jest.fn() }) =>
    render(<CardMenu toggleMenu={toggleMenu} isOpen={isOpen} onOpenModal={onOpenModal} />)
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should renders correctly with opened dropdown', () => {
    expect(getComponent({ isOpen: true }).asFragment()).toMatchSnapshot()
  })
  it('Should called toggleMenu', () => {
    const toggleMenu = jest.fn()
    const { getByText } = getComponent({ toggleMenu, isOpen: true })
    fireEvent.click(getByText('×'))
    expect(toggleMenu).toBeCalled()
  })
  it('Should called onOpenModal', () => {
    const onOpenModal = jest.fn()
    const { getByText } = getComponent({ onOpenModal, isOpen: true })
    fireEvent.click(getByText('Edit'))
    expect(onOpenModal).toBeCalled()
  })
})
