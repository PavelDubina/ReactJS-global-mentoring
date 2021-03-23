import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import movieReducer from './movieReducer'

const rootReducer = combineReducers({
  moviesData: moviesReducer,
  movieData: movieReducer,
})

export default rootReducer
