import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames'
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback'
import { getReleaseYear } from '../../utils/helpers'
import styles from './MovieDetails.scss'

export const MovieDetails = () => {
  const { movie } = useSelector((state) => state.movieData)
  const runtimeStyle = className(styles.runtime, { [styles.noneVisible]: !movie.runtime })
  const ratingStyle = className(styles.rating, { [styles.noneVisible]: !movie.vote_average })
  return (
    <div className={styles.container}>
      <ImageWithFallback src={movie.poster_path} />
      <div className={styles.info}>
        <div className={styles.name_and_rating}>
          <h1 className={styles.name}>{movie.title}</h1>
          <div className={ratingStyle}>{movie.vote_average}</div>
        </div>
        <div className={styles.duration_and_release}>
          <p>{getReleaseYear(movie.release_date)}</p>
          <p className={runtimeStyle}>
            {movie.runtime}
            {' min'}
          </p>
        </div>
        <p className={styles.overview}>{movie.overview}</p>
      </div>
      <FontAwesomeIcon className={styles.search_icon} icon={faSearch} />
    </div>
  )
}
