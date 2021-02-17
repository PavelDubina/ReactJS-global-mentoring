import React from 'react'
import { Button } from '../Button/Button'
import styles from './Search.scss'

export const Search = () => (
  <div className={styles.container}>
    <Button type="adding">+ ADD MOVIE</Button>
    <h1 className={styles.title}>FIND YOUR MOVIE</h1>
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="What do you want to watch?" />
      <Button type="search">SEARCH</Button>
    </form>
  </div>
)
