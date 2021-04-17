import { EActionTypes } from './actionTypes'
import { BASE_URL } from '../../utils/constants'
import { getSortQuery, getFilterQuery } from '../../utils/helpers'
import { TMovie } from '../types'
import { ThunkAction } from 'redux-thunk'

export type TFetchData = {
  type: EActionTypes.SEARCH_MOVIES_PENDING
}

const fetchData = (): TFetchData => ({
  type: EActionTypes.SEARCH_MOVIES_PENDING,
})

type TFetchDataSuccessPayload = {
  data: TMovie[]
  sortBy: string
  filter: string
  search: string
}

export type TFetchDataSuccess = {
  type: EActionTypes.SEARCH_MOVIES_SUCCESS
  payload: TFetchDataSuccessPayload
}

export const fetchDataSuccess = (payload: TFetchDataSuccessPayload): TFetchDataSuccess => ({
  type: EActionTypes.SEARCH_MOVIES_SUCCESS,
  payload,
})

export type TFetchDataError = {
  type: EActionTypes.SEARCH_MOVIES_ERROR
}

const fetchDataError = (): TFetchDataError => ({
  type: EActionTypes.SEARCH_MOVIES_ERROR,
})

export type TMoviesActionTypes = TFetchData | TFetchDataSuccess | TFetchDataError | { type: EActionTypes.DEFAULT }

type TQuery = {
  sortBy?: string
  filter?: string
  search?: string
}

const fetchMovies = ({
  sortBy = '',
  filter = '',
  search = '',
}: TQuery): ThunkAction<void, unknown, unknown, TMoviesActionTypes> => async (dispatch) => {
  try {
    dispatch(fetchData())
    const response = await fetch(
      `${BASE_URL}?searchBy=title&sortOrder=desc&limit=120&filter=${getFilterQuery(filter)}&sortBy=${getSortQuery(
        sortBy,
      )}&search=${search}`,
    )
    const movies = await response.json()
    dispatch(fetchDataSuccess({ data: movies.data, sortBy, filter, search }))
  } catch (error) {
    dispatch(fetchDataError())
  }
}

export default fetchMovies
