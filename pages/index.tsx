import React from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default App
