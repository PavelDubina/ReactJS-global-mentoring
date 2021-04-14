import React from 'react'
import { render } from '@testing-library/react'
import { Input } from '../Input'

jest.mock('formik', () => ({
  useField: jest.fn().mockReturnValue([
    {
      onChange: jest.fn(),
    },
    {
      touched: true,
      error: 'This is test error',
    },
  ]),
}))

describe('Input', () => {
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
    const { getByText } = getComponent({})
    expect(getByText('This is test error')).toBeTruthy()
  })
})
