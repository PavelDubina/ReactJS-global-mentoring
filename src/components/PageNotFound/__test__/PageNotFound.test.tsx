import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { PageNotFound } from '../PageNotFound'

describe('PageNotFound', () => {
  const history = createMemoryHistory()
  const getComponent = () =>
    render(
      <Router history={history}>
        <PageNotFound />
      </Router>,
    )
  it('Should renders correctly', () => {
    expect(getComponent().asFragment()).toMatchSnapshot()
  })
})
