import { EActionTypes } from './actionTypes'
import { BASE_URL } from '../../utils/constants'
import { TMovie } from '../types'
import { ThunkAction } from 'redux-thunk'

export type TFetchData = {
  type: EActionTypes.SEARCH_MOVIE_PENDING
}

const fetchData = (): TFetchData => ({
  type: EActionTypes.SEARCH_MOVIE_PENDING,
})

export type TFetchDataSuccess = {
  type: EActionTypes.SEARCH_MOVIE_SUCCESS
  payload: TMovie
}

export const fetchMovieDataSuccess = (payload: TMovie): TFetchDataSuccess => ({
  type: EActionTypes.SEARCH_MOVIE_SUCCESS,
  payload,
})

export type TFetchDataError = {
  type: EActionTypes.SEARCH_MOVIE_ERROR
  payload: string
}

const fetchDataError = (error: string): TFetchDataError => ({
  type: EActionTypes.SEARCH_MOVIE_ERROR,
  payload: error,
})

export type TMovieActionTypes = TFetchData | TFetchDataSuccess | TFetchDataError | { type: EActionTypes.DEFAULT }

const fetchMovie = (id: string): ThunkAction<void, unknown, unknown, TMovieActionTypes> => async (dispatch) => {
  try {
    dispatch(fetchData())
    const response = await fetch(`${BASE_URL}/${id}`)
    const movie = await response.json()
    dispatch(fetchMovieDataSuccess(movie))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}

export default fetchMovie
