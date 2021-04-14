import React from 'react'
import { render } from '@testing-library/react'
import 'next/router'
import { Header } from '../Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn(), query: { id: '3133369', query: '' }, asPath: '/' }),
}))
describe('Header', () => {
  const getComponent = () =>
    render(
      <Header>
        <div>Test children</div>
      </Header>,
    )
  it('Should renders correctly', () => {
    expect(getComponent().asFragment()).toMatchSnapshot()
  })
})
