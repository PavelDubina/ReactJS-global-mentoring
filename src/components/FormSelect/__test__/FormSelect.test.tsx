import React from 'react'
import 'next-i18next'
import { render, fireEvent } from '@testing-library/react'
import { FormSelect } from '../FormSelect'

jest.mock('next-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (str: any) => str,
  }),
}))

describe('FormSelect', () => {
  const getComponent = ({ value = '', name = 'genres', onChange = jest.fn() }) =>
    render(<FormSelect value={value} name={name} onChange={onChange} />)
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should open dropdown', () => {
    const { getByText, getByTestId } = getComponent({})
    const select = getByText('addModal.placeholders.genre')
    const dropdown = getByTestId('dropdown')
    fireEvent.click(select)
    expect(dropdown.classList.contains('visible')).toBeTruthy()
  })
  it('Should close dropdown', () => {
    const { getByText, getByTestId } = getComponent({})
    const select = getByText('addModal.placeholders.genre')
    const dropdown = getByTestId('dropdown')
    fireEvent.click(select)
    fireEvent.click(document)
    expect(dropdown.classList.contains('visible')).toBeFalsy()
  })
  it('Should call onChange', () => {
    const onChange = jest.fn()
    const { getByText, getByLabelText } = getComponent({ onChange })
    const select = getByText('addModal.placeholders.genre')
    const checkbox = getByLabelText('addModal.genres.comedy')
    fireEvent.click(select)
    fireEvent.click(checkbox)
    expect(onChange).toBeCalled()
  })
})
