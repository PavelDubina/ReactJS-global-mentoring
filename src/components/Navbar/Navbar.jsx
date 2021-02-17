import React, { useState } from 'react'
import className from 'classnames'
import styles from './Navbar.scss'

const genres = ['all', 'documentary', 'comedy', 'horror', 'crime']

export const Navbar = () => {
  const [active, setActive] = useState(0)
  return (
    <div className={styles.container}>
      <div className={styles.genres}>
        {genres.map((genre, i) => {
          const classList = className(styles.genre, { [styles.active]: active === i })
          return (
            <div className={classList} onClick={() => setActive(i)} key={genre}>
              {genre}
            </div>
          )
        })}
      </div>
      <div className={styles.sort}>
        <span>SORT BY</span>
        <div>RELEASE DATE</div>
      </div>
    </div>
  )
}
