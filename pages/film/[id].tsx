import React from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default FilmPage
