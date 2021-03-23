import React from 'react'
import { hot } from 'react-hot-loader'
import { Footer } from './components/Footer/Footer'
import { Routes } from './Routes'
import styles from './App.scss'

const App = () => (
  <div className={styles.main_container}>
    <Routes />
    <Footer />
  </div>
)
export default hot(module)(App)
