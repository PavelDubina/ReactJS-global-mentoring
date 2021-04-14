import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import { Modal } from '../Modal'

describe('Modal', () => {
  ReactDOM.createPortal = jest.fn((element: any) => element)
  const getComponent = ({ onClose = jest.fn(), title = 'test title' }) =>
    render(
      <Modal onClose={onClose} title={title}>
        <div>test children</div>
      </Modal>,
    )
  it('modal shows the children and a close button', () => {
    const handleClose = jest.fn()
    const { getByText } = getComponent({ onClose: handleClose })
    expect(getByText('test title')).toBeTruthy()
    expect(getByText('test children')).toBeTruthy()
    fireEvent.click(getByText('×'))
    expect(handleClose).toBeCalled()
  })
})
