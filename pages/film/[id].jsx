import React from 'react'
import Head from 'next/head'
import { Header } from '../../src/components/Header/Header'
import { MovieDetails } from '../../src/components/MovieDetails/MovieDetails'
import { ErrorBoundary } from '../../src/components/ErrorBoundary/ErrorBoundary'
import { MovieList } from '../../src/components/MoviesList/MovieList'

const FilmPage = () => (
  <>
    <Head>
      <title>Netflix Roulette | Film</title>
    </Head>
    <Header>
      <MovieDetails />
    </Header>
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
  </>
)

export default FilmPage
