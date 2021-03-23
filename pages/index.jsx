import React from 'react'
import Head from 'next/head'
import { Header } from '../src/components/Header/Header'
import { Search } from '../src/components/Search/Search'
import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary'
import { MovieList } from '../src/components/MoviesList/MovieList'

const App = () => (
  <>
    <Head>
      <title>Netflix Roulette</title>
    </Head>
    <Header>
      <Search />
    </Header>
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
  </>
)
export default App
