import fetchMovies, { TMoviesActionTypes } from './fetchMovies'
import { BASE_URL } from '../../utils/constants'
import { TMovie } from '../types'
import { ThunkAction } from 'redux-thunk'
import { TAppState } from '../reducers/rootReducer'

const editMovie = (content: TMovie): ThunkAction<void, TAppState, unknown, TMoviesActionTypes> => async (
  dispatch,
  getState,
) => {
  const { sortBy, filter, search } = getState().moviesData
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    })
    if (response.status === 200) {
      dispatch(fetchMovies({ sortBy, filter, search }))
    }
  } catch (error) {
    console.log(error)
  }
}

export default editMovie
