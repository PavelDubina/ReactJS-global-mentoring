import React from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Header } from '../../src/components/Header/Header'
import { ErrorBoundary } from '../../src/components/ErrorBoundary/ErrorBoundary'
import { MovieList } from '../../src/components/MoviesList/MovieList'
import { Search } from '../../src/components/Search/Search'

const SearchPage = () => (
  <>
    <Head>
      <title>Netflix Roulette | Search</title>
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

export default SearchPage
