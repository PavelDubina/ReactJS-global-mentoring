import React from 'react'
import { hot } from 'react-hot-loader'
import { MovieList } from './components/MoviesList/MovieList'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { MovieDetails } from './components/MovieDetails/MovieDetails'
// eslint-disable-next-line no-unused-vars
import { Search } from './components/Search/Search'
import styles from './App.scss'

const App = () => (
  <div className={styles.main_container}>
    <Header>
      <MovieDetails />
      {/* <Search /> */}
    </Header>
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
    <Footer />
  </div>
)
export default hot(module)(App)
