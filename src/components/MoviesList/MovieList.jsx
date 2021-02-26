import React, { useState } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { Navbar } from '../Navbar/Navbar'
import { EditForm } from '../EditForm/EditForm'
import { DeleteForm } from '../DeleteForm/DeleteForm'
import movies from '../../mock_response.json'
import styles from './MovieList.scss'

export const MovieList = () => {
  const [{ isOpen, status, movieData }, setMovie] = useState({
    isOpen: false,
    status: 'delete || edit',
    movieData: {},
  })
  const onCloseModal = (event) => {
    if (event.target.dataset.close) {
      setMovie((state) => ({ ...state, isOpen: false }))
    }
  }
  const getMovie = (id, status, isOpen) => {
    setMovie({ status, isOpen, movieData: movies.data.find((movie) => movie.id === id) })
  }
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Navbar />
        <div className={styles.result__count}>
          <span className={styles.result__count_number}>{movies.data.length}</span>
          <span>movies found</span>
        </div>
        <div className={styles.list}>
          {movies.data.map((movie) => (
            <MovieCard
              poster={movie.poster_path}
              genres={movie.genres}
              title={movie.title}
              date={movie.release_date}
              vote={movie.vote_average}
              overview={movie.overview}
              runtime={movie.runtime}
              id={movie.id}
              key={movie.id}
              getMovie={getMovie}
            />
          ))}
          {status === 'Edit' && isOpen && (
            <EditForm
              onClose={onCloseModal}
              genres={movieData.genres.map((genre) => genre.toLowerCase())}
              title={movieData.title}
              id={movieData.id}
              release={movieData.release_date}
              overview={movieData.overview}
              runtime={movieData.runtime}
            />
          )}
          {status === 'Delete' && isOpen && <DeleteForm onClose={onCloseModal} />}
        </div>
      </div>
    </div>
  )
}
