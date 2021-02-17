import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { Navbar } from '../Navbar/Navbar'
import { useCorrectGenres, getReleaseYear } from '../../utils/helpers'
import movies from '../../mock_response.json'
import styles from './MovieList.scss'

export const MovieList = () => (
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
            genres={useCorrectGenres(movie.genres)}
            title={movie.title}
            date={getReleaseYear(movie.release_date)}
            vote={movie.vote_average}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  </div>
)
