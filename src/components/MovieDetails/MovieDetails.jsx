import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback'
import { getReleaseYear } from '../../utils/helpers'
import movie from '../../mock_movie.json'
import styles from './MovieDetails.scss'

export const MovieDetails = () => (
  <div className={styles.container}>
    <ImageWithFallback src={movie.poster_path} />
    <div className={styles.info}>
      <div className={styles.name_and_rating}>
        <h1 className={styles.name}>{movie.title}</h1>
        <div className={styles.rating}>{movie.vote_average}</div>
      </div>
      <div className={styles.duration_and_release}>
        <p>{getReleaseYear(movie.release_date)}</p>
        <p>
          {movie.runtime}
          {' min'}
        </p>
      </div>
      <p className={styles.overview}>{movie.overview}</p>
    </div>
    <FontAwesomeIcon className={styles.search_icon} icon={faSearch} />
  </div>
)
