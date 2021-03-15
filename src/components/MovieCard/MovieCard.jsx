import React, { useState } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import { CardMenu } from './CardMenu/CardMenu'
import { getReleaseYear, getCorrectGenres } from '../../utils/helpers'
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback'
import styles from './MovieCard.scss'

export const MovieCard = ({ title, genres, date, poster, id, getMovie, handleMovieDetails }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuStyle = className(styles.menu, { [styles.menu_opened]: isOpen })
  const toggleMenu = () => setIsOpen((state) => !state)
  const onOpenModal = (event) => {
    getMovie(id, event.target.innerHTML, true)
    setIsOpen((state) => !state)
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.poster}>
          <ImageWithFallback onClick={() => handleMovieDetails(id)} src={poster} />
          <div data-testid="menu" className={menuStyle}>
            <CardMenu isOpen={isOpen} onOpenModal={onOpenModal} toggleMenu={toggleMenu} />
          </div>
        </div>
        <div className={styles.movie__data}>
          <div className={styles.movie__data_info}>
            <h2 className={styles.movie__data_info_title}>{title}</h2>
            <p className={styles.movie__data_info_genres}>{getCorrectGenres(genres)}</p>
          </div>
          <div className={styles.movie__data_date}>
            <span>{getReleaseYear(date)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  poster: PropTypes.string,
  id: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired,
  handleMovieDetails: PropTypes.func.isRequired,
}
