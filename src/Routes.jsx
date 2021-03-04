import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MovieDetails } from './components/MovieDetails/MovieDetails'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { Search } from './components/Search/Search'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import { MovieList } from './components/MoviesList/MovieList'

export const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <>
          <Header>
            <Search />
          </Header>
          <ErrorBoundary>
            <MovieList />
          </ErrorBoundary>
        </>
      )}
    />
    <Route
      path="/search/:query"
      component={() => (
        <>
          <Header>
            <Search />
          </Header>
          <ErrorBoundary>
            <MovieList />
          </ErrorBoundary>
        </>
      )}
    />
    <Route
      path="/film/:id"
      component={() => (
        <>
          <Header>
            <MovieDetails />
          </Header>
          <ErrorBoundary>
            <MovieList />
          </ErrorBoundary>
        </>
      )}
    />
    <Route path="/404" component={PageNotFound} />
    <Redirect to="/404" />
  </Switch>
)
