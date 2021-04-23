import React, { useState, useEffect } from 'react'
import Poster from '../../../public/fallback-image.jpg'

type ImageWithFallbackProps = {
  src?: string
  id?: string | string[]
  onClick?: () => void
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = React.memo(({ src = Poster, onClick, id }) => {
  const [error, setError] = useState(false)
  const onImageError = () => setError(true)
  const imgSrc = !error ? src : Poster
  useEffect(() => {
    if (id) setError(false)
  }, [src, id])
  return <img onError={onImageError} onClick={onClick} src={imgSrc} width="9" height="16" alt="poster" />
})
