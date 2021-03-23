import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Poster from '../../../public/fallback-image.jpg'

export const ImageWithFallback = ({ src = Poster, onClick, id }) => {
  const [error, setError] = useState(false)
  const onImageError = () => setError(true)
  const imgSrc = !error ? src : Poster
  useEffect(() => {
    if (id) setError(false)
  }, [id])
  return <img onError={onImageError} onClick={onClick} src={imgSrc} width="9" height="16" alt="poster" />
}

ImageWithFallback.propTypes = {
  src: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
}
