import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ImageWithFallback } from '../ImageWithFallback'

describe('ImageWithFallback', () => {
  type Prop = { onClick?: () => void; src?: any }
  const getComponent = ({ onClick = jest.fn(), src }: Prop) => render(<ImageWithFallback onClick={onClick} src={src} />)
  it('Should renders correctly with empty src', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should called onClick', () => {
    const onClick = jest.fn()
    const { getByAltText } = getComponent({ onClick })
    const image = getByAltText('poster')
    fireEvent.click(image)
    expect(onClick).toBeCalled()
  })
  it('After onError event src changes to mock src', () => {
    const { getByAltText } = getComponent({ src: '' })
    const image: any = getByAltText('poster')
    fireEvent.error(image)
    expect(image.src).toBe('http://localhost/test-file-stub')
  })
})
