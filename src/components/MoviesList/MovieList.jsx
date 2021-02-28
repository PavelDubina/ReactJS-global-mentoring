import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieCard } from '../MovieCard/MovieCard'
import { Navbar } from '../Navbar/Navbar'
import { EditForm } from '../EditForm/EditForm'
import { DeleteForm } from '../DeleteForm/DeleteForm'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'
import fetchMovies from '../../redux/actions/fetchMovies'
import fetchMovie from '../../redux/actions/fetchMovie'
import { getSortQuery } from '../../utils/helpers'
import { sortingValues, navGenres } from '../../utils/constants'
import styles from './MovieList.scss'

export const MovieList = () => {
  const dispatch = useDispatch()
  const [genreValue, setGenreValue] = useState(navGenres.all)
  const [sortValue, setSortValue] = useState(sortingValues.RELEASE_DATE)
  const { movies, search } = useSelector((state) => state.moviesData)
  const [{ isOpen, status, movieData }, setMovie] = useState({
    isOpen: false,
    status: 'delete || edit',
    movieData: {},
  })
  const toggleSortValue = (event) => setSortValue(event.target.textContent)
  const handleMenu = (genre) => setGenreValue(genre)
  const onCloseModal = useCallback(
    (event) => event.target.dataset.close && setMovie((state) => ({ ...state, isOpen: false })),
    [isOpen],
  )
  const getMovie = (id, status, isOpen) => {
    setMovie({ status, isOpen, movieData: movies.find((movie) => movie.id === id) })
  }
  useEffect(() => {
    dispatch(
      fetchMovies({ filter: genreValue === navGenres.all ? '' : genreValue, sortBy: getSortQuery(sortValue), search }),
    )
  }, [genreValue, sortValue])
  const handleMovieDet = (id) => dispatch(fetchMovie(id))
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Navbar
          toggleSortValue={toggleSortValue}
          handleMenu={handleMenu}
          genreValue={genreValue}
          sortValue={sortValue}
        />
        <div className={styles.result__count}>
          <span className={styles.result__count_number}>{movies.length}</span>
          <span>movies found</span>
        </div>
        <div className={styles.list}>
          {movies.map((movie) => (
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
              handleMovieDet={handleMovieDet}
            />
          ))}
          {status === 'Edit' && isOpen && (
            <EditForm
              onClose={onCloseModal}
              genres={movieData.genres.map((genre) => genre.toLowerCase())}
              title={movieData.title}
              id={movieData.id}
              release_date={movieData.release_date}
              overview={movieData.overview}
              runtime={movieData.runtime}
              poster_path={movieData.poster_path}
            />
          )}
          {status === 'Delete' && isOpen && <DeleteForm id={movieData.id} onClose={onCloseModal} />}
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
