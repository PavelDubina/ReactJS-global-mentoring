import React from 'react'
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import { Search } from '../Search'

const mockStore = configureStore([])
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn(), query: { query: '' } }),
}))

describe('Search', () => {
  ReactDOM.createPortal = jest.fn((element) => element)
  const store = mockStore({})
  const getComponent = () =>
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    )
  it('Should renders correctly', () => {
    expect(getComponent().asFragment()).toMatchSnapshot()
  })
  it('Should open modal after click on button ADD MOVIE and close modal', () => {
    const { getByText } = getComponent()
    const button = getByText('+ ADD MOVIE')
    fireEvent.click(button)
    expect(getByText('ADD MOVIE')).toBeTruthy()
    fireEvent.click(getByText('×'))
  })
  it('Should change input value', () => {
    const { getByRole } = getComponent()
    const input = getByRole('textbox', { name: '' })
    fireEvent.change(input, { target: { value: 'test value' } })
    expect(input.value).toBe('test value')
  })
  it('Should change pathname after call onSubmit with empty input value', () => {
    const { getByText } = getComponent()
    const submit = getByText('SEARCH')
    fireEvent.click(submit)
    expect(useRouter().push).toBeCalled()
  })
  it('Should change pathname after call onSubmit with input value', () => {
    const { getByRole, getByText } = getComponent()
    const submit = getByText('SEARCH')
    const input = getByRole('textbox', { name: '' })
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.click(submit)
    expect(useRouter().push).toBeCalled()
  })
})
