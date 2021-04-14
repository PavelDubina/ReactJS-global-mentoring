import React from 'react'
import { render } from '@testing-library/react'
import { ErrorBoundary } from '../ErrorBoundary'

describe('Error Boundary', () => {
  const Child = () => {
    throw new Error()
  }
  it(`should render error boundary component without error`, () => {
    const getComponent = () =>
      render(
        <ErrorBoundary>
          <div>test</div>
        </ErrorBoundary>,
      )
    const { getByText } = getComponent()
    expect(getByText('test')).toBeTruthy()
  })
  it(`should render error boundary component when there is an error`, () => {
    const getComponent = () =>
      render(
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>,
      )
    const { getByText } = getComponent()
    expect(getByText('Ooops, something went wrong... We are doing our best to fix issue')).toBeTruthy()
  })
})
