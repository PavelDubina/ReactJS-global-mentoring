import React from 'react'
import { hot } from 'react-hot-loader'
import { MovieList } from './components/MoviesList/MovieList'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { Search } from './components/Search/Search'
import styles from './App.scss'

const App = () => (
  <div className={styles.main_container}>
    <Header>
      <Search />
    </Header>
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
    <Footer />
  </div>
)
export default hot(module)(App)
