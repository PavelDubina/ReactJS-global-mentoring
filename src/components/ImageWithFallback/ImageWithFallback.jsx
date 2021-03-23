import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Poster from '../../static/images/fallback-image.jpg'

export const ImageWithFallback = ({ src = '', onClick }) => {
  const [error, setError] = useState(false)
  const onImageError = () => setError(true)
  const imgSrc = !error ? src : Poster
  return <img onError={onImageError} onClick={onClick} src={imgSrc} width="9" height="16" alt="poster" />
}

ImageWithFallback.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
