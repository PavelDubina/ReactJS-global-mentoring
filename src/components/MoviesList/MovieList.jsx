import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { MovieCard } from '../MovieCard/MovieCard'
import { Navbar } from '../Navbar/Navbar'
import { EditForm } from '../EditForm/EditForm'
import { DeleteForm } from '../DeleteForm/DeleteForm'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'
import fetchMovies from '../../redux/actions/fetchMovies'
import { Loading } from '../Loading/Loading'
import styles from './MovieList.scss'

export const MovieList = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { query } = useParams()
  const { movies, isLoading, error, sortBy, filter } = useSelector((state) => state.moviesData)
  const [genreValue, setGenreValue] = useState(filter)
  const [sortValue, setSortValue] = useState(sortBy)
  const [{ isOpen, status, movieData }, setMovie] = useState({
    isOpen: false,
    status: 'delete || edit',
    movieData: {},
  })
  const toggleSortValue = (event) => setSortValue(event.target.textContent)
  const handleMenu = (genre) => setGenreValue(genre)
  const onCloseModal = useCallback(() => setMovie((state) => ({ ...state, isOpen: false })), [isOpen])
  const getMovie = (id, status, isOpen) => {
    setMovie({ status, isOpen, movieData: movies.find((movie) => movie.id === id) })
  }
  useEffect(() => {
    dispatch(
      fetchMovies({
        filter: genreValue,
        sortBy: sortValue,
        search: query,
      }),
    )
  }, [genreValue, sortValue, query])
  const handleMovieDetails = (id) => {
    history.push(`/film/${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
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
              handleMovieDetails={handleMovieDetails}
            />
          ))}
          {status === 'Edit' && isOpen && (
            <EditForm
              onClose={onCloseModal}
              genres={movieData.genres}
              title={movieData.title}
              id={movieData.id}
              release_date={movieData.release_date}
              overview={movieData.overview}
              runtime={movieData.runtime}
              poster_path={movieData.poster_path}
              vote_average={movieData.vote_average}
              vote_count={movieData.vote_count}
            />
          )}
          {status === 'Delete' && isOpen && <DeleteForm id={movieData.id} onClose={onCloseModal} />}
        </div>
        {error && <p className={styles.not_found}>Movies not found</p>}
        {isLoading && <Loading />}
      </div>
      <ScrollToTop />
    </div>
  )
}
