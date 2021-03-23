import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { SuccessMessage } from '../SuccessMessage'

describe('SuccessMessage', () => {
  ReactDOM.createPortal = jest.fn((element) => element)
  const getComponent = ({ onClose = jest.fn() }) => render(<SuccessMessage onClose={onClose} />)
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
})
