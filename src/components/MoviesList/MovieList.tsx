import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { MovieCard } from '../MovieCard/MovieCard'
import { Navbar } from '../Navbar/Navbar'
import { EditForm } from '../EditForm/EditForm'
import { DeleteForm } from '../DeleteForm/DeleteForm'
import { ScrollToTop } from '../ScrollToTop/ScrollToTop'
import fetchMovies from '../../redux/actions/fetchMovies'
import { Loading } from '../Loading/Loading'
import styles from '../../../styles/MovieList.module.scss'
import { TAppState } from '../../redux/reducers/rootReducer'
import { TMovie } from '../../redux/types'

type TUseMovieState = {
  isOpen: boolean
  status: string
  movieData: TMovie
}

export const MovieList: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()
  const { query, id } = router.query
  const { movies, isLoading, error, sortBy, filter, search } = useSelector((state: TAppState) => state.moviesData)
  const [genreValue, setGenreValue] = useState(filter)
  const [sortValue, setSortValue] = useState(sortBy)
  const [{ isOpen, status, movieData }, setMovie] = useState<TUseMovieState>({
    isOpen: false,
    status: 'delete || edit',
    movieData: {
      title: '',
      tagline: '',
      vote_average: 0,
      vote_count: 0,
      release_date: '',
      poster_path: '',
      overview: '',
      budget: 0,
      revenue: 0,
      runtime: 0,
      genres: [''],
      id: 0,
    },
  })
  const toggleSortValue = (sortValue: string) => setSortValue(sortValue)
  const handleMenu = (genre: string) => setGenreValue(genre)
  const onCloseModal = useCallback(() => setMovie((state) => ({ ...state, isOpen: false })), [isOpen])
  const getMovie = (id: number, status: string, isOpen: boolean) => {
    setMovie({ status, isOpen, movieData: movies.find((movie) => movie.id === id) || movieData })
  }
  useEffect(() => {
    if (router.isReady) {
      dispatch(
        fetchMovies({
          filter: genreValue,
          sortBy: sortValue,
          search: id ? search : (query as string),
        }),
      )
    }
  }, [genreValue, sortValue, query, id])
  const handleMovieDetails = (id: number) => {
    router.push({ pathname: `/film/[id]`, query: { id } }, undefined, { scroll: false, shallow: true })
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
          <span>{t('found')}</span>
        </div>
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieCard
              poster={movie.poster_path}
              genres={movie.genres}
              title={movie.title}
              date={movie.release_date}
              id={movie.id}
              key={movie.id}
              getMovie={getMovie}
              handleMovieDetails={handleMovieDetails}
            />
          ))}
          {status === 'edit' && isOpen && (
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
          {status === 'delete' && isOpen && <DeleteForm id={movieData.id} onClose={onCloseModal} />}
        </div>
        {error && <p className={styles.not_found}>Movies not found</p>}
        {isLoading && <Loading />}
      </div>
      <ScrollToTop />
    </div>
  )
}
