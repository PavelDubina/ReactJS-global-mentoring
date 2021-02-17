import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Poster from '../../static/images/fallback-image.jpg'

export const ImageWithFallback = ({ src }) => {
  const [state, setState] = useState({
    src,
    error: false,
  })
  const onImageError = () => {
    setState({ ...state, error: true })
  }
  const imgSrc = !state.error ? state.src : Poster
  return <img onError={onImageError} src={imgSrc} width="9" height="16" alt="poster" />
}

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
}
