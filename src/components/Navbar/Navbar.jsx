import React, { useState } from 'react'
import className from 'classnames'
import { Select } from './Select/Select'
import { navGenres } from '../../utils/constants'
import styles from './Navbar.scss'

export const Navbar = () => {
  const [active, setActive] = useState(0)
  return (
    <nav className={styles.container}>
      <div className={styles.genres}>
        {navGenres.map((genre, i) => {
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
        <Select />
      </div>
    </nav>
  )
}
