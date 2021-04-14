import React from 'react'
import { create } from 'react-test-renderer'
import { Footer } from '../Footer'

describe('Footer', () => {
  it('Should renders correctly', () => {
    const component = create(<Footer />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
