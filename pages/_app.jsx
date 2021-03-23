import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { Footer } from '../src/components/Footer/Footer'
import { useStore, initializeStore } from '../src/redux/store'
import { BASE_URL, sortingValues, navGenres } from '../src/utils/constants'
import { createUrl } from '../src/utils/helpers'
import { fetchDataSuccess } from '../src/redux/actions/fetchMovies'
import { fetchMovieDataSuccess } from '../src/redux/actions/fetchMovie'
import '../styles.scss'
import styles from '../styles/App.module.scss'

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <div className={styles.main_container}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const reduxStore = initializeStore({})
  const { query = '', id } = appContext.router.query
  const { dispatch } = reduxStore
  const responseMovies = await fetch(createUrl(navGenres.all, sortingValues.RELEASE_DATE, query))
  const movies = await responseMovies.json()
  dispatch(fetchDataSuccess({ data: movies.data, sortBy: sortingValues.RELEASE_DATE, filter: navGenres.all }))
  if (id) {
    const responseMovie = await fetch(`${BASE_URL}/${id}`)
    const movie = await responseMovie.json()
    dispatch(fetchMovieDataSuccess(movie))
  }
  appProps.pageProps = { ...appProps.pageProps, initialReduxState: reduxStore.getState() }
  return appProps
}

export default MyApp
