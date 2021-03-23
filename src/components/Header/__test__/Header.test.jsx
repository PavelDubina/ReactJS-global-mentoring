import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from '../Header'

describe('Header', () => {
  const getComponent = () =>
    render(
      <Router>
        <Header>
          <div>Test children</div>
        </Header>
      </Router>,
    )
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
})
