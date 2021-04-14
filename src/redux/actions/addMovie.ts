import { ThunkAction } from 'redux-thunk'
import fetchMovies, { TMoviesActionTypes } from './fetchMovies'
import { BASE_URL } from '../../utils/constants'
import { TAddedMovie } from '../types'
import { TAppState } from '../reducers/rootReducer'

const addMovie = (content: TAddedMovie): ThunkAction<void, TAppState, unknown, TMoviesActionTypes> => async (
  dispatch,
  getState,
) => {
  const { sortBy, filter, search } = getState().moviesData
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    })
    if (response.status === 201) {
      dispatch(fetchMovies({ sortBy, filter, search }))
    }
  } catch (error) {
    console.log(error)
  }
}

export default addMovie
