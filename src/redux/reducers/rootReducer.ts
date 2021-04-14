import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import movieReducer from './movieReducer'

const rootReducer = combineReducers({
  moviesData: moviesReducer,
  movieData: movieReducer,
})

type TRootReducer = typeof rootReducer
export type TAppState = ReturnType<TRootReducer>

export default rootReducer
