import React from 'react'
import { render } from '@testing-library/react'
import { useField } from 'formik'
import { Input } from '../Input'

jest.mock('formik')

describe('Input', () => {
  const mockMeta = {
    touched: false,
    error: '',
  }
  const mockField = {
    onChange: jest.fn(),
  }
  useField.mockReturnValue([mockField, mockMeta])

  const getComponent = ({
    title = 'test title',
    name = 'test name',
    type = 'text',
    value = 'test value',
    placeholder = 'test placeholder',
  }) => render(<Input title={title} name={name} type={type} value={value} placeholder={placeholder} />)
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should show error', () => {
    const mockMeta = {
      touched: true,
      error: 'This is test error',
    }
    const mockField = {
      onChange: jest.fn(),
    }
    useField.mockReturnValue([mockField, mockMeta])
    const { getByText } = getComponent({})
    expect(getByText('This is test error')).toBeTruthy()
  })
})
