import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames'
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback'
import { getReleaseYear } from '../../utils/helpers'
import fetchMovie from '../../redux/actions/fetchMovie'
import styles from './MovieDetails.scss'

export const MovieDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { movie } = useSelector((state) => state.movieData)
  const runtimeStyle = className(styles.runtime, { [styles.noneVisible]: !movie.runtime })
  const ratingStyle = className(styles.rating, { [styles.noneVisible]: !movie.vote_average })
  useEffect(() => dispatch(fetchMovie(id)), [id])
  return (
    <div className={styles.container}>
      <ImageWithFallback src={movie.poster_path} id={id} />
      {movie.id ? (
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
      ) : (
        <p className={styles.not_found}>No movie found</p>
      )}
      <Link to="/">
        <FontAwesomeIcon className={styles.search_icon} icon={faSearch} />
      </Link>
    </div>
  )
}
