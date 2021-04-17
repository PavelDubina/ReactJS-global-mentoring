import '../styles.scss'
import { withNextRouter } from 'storybook-addon-next-router'
import { addDecorator } from '@storybook/react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { withI18next } from 'storybook-addon-i18next'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import movies from '../src/MockedData/mockMovies.json'
import movie from '../src/MockedData/mockMovie.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: 'common',
    ns: 'common',
    debug: false,
    supportedLngs: ['en', 'ru'],
    whitelist: ['en', 'ru'],
    fallbackLng: 'en',
  })

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(
  withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
    push() {},
  }),
)

addDecorator(
  withI18next({
    i18n,
    languages: {
      en: 'English',
      ru: 'Russian',
    },
  }),
)

// Add <Suspense> after withI18next decorator
addDecorator((story, context) => <Suspense fallback="Loading...">{story(context)}</Suspense>)

const mockStore = configureStore([thunk])
const store = mockStore({
  moviesData: { movies },
  movieData: { movie },
})

addDecorator((story) => (
  <Provider store={store}>
    <div id="app-root">{story()}</div>
    <div id="modal-root" />
  </Provider>
))
