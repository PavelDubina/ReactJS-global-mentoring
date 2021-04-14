import React, { useState } from 'react'
import className from 'classnames'
import { CardMenu } from './CardMenu/CardMenu'
import { getReleaseYear, getCorrectGenres } from '../../utils/helpers'
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback'
import styles from '../../../styles/MovieCard.module.scss'

type MovieCardProps = {
  title: string
  genres: string[]
  date: string
  poster?: string
  id: number
  getMovie: (id: number, status: string, isOpen: boolean) => void
  handleMovieDetails: (id: number) => void
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  genres,
  date,
  poster,
  id,
  getMovie,
  handleMovieDetails,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuStyle = className(styles.menu, { [styles.menu_opened]: isOpen })
  const toggleMenu = () => setIsOpen((state) => !state)
  const onOpenModal = (status: string) => {
    getMovie(id, status, true)
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
