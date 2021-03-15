import React from 'react'
import { create } from 'react-test-renderer'
import { Loading } from '../Loading'

describe('Loading', () => {
  it('Should renders correctly', () => {
    const component = create(<Loading />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
