import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import styles from './PageNotFound.scss'

export const PageNotFound = () => (
  <div className={styles.container}>
    <h1>Page Not Found</h1>
    <p>404</p>
    <Link to="/">
      <Button styleType="back_home">GO BACK TO HOME</Button>
    </Link>
  </div>
)
