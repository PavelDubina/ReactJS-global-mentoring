import React from 'react'
import PropTypes from 'prop-types'
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback'
import styles from './MovieCard.scss'

export const MovieCard = ({ title, genres, date, poster }) => (
  <div className={styles.container}>
    <div className={styles.poster}>
      <ImageWithFallback src={poster} />
      {/* <img width="9" height="16" src={poster} alt="poster" /> */}
      <div className={styles.results_filter}>
        <div />
        <div />
        <div />
      </div>
    </div>
    <div className={styles.movie__data}>
      <div className={styles.movie__data_info}>
        <h2 className={styles.movie__data_info_title}>{title}</h2>
        <p className={styles.movie__data_info_genres}>{genres}</p>
      </div>
      <div className={styles.movie__data_date}>
        <span>{date}</span>
      </div>
    </div>
  </div>
)

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
}
