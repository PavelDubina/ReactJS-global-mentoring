import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import { Select } from './Select/Select'
import { navGenres } from '../../utils/constants'
import styles from './Navbar.scss'

export const Navbar = ({ genreValue, sortValue, toggleSortValue, handleMenu }) => (
  <nav className={styles.container}>
    <div className={styles.genres}>
      {Object.values(navGenres).map((genre) => {
        const classList = className(styles.genre, { [styles.active]: genreValue === genre })
        return (
          <div className={classList} onClick={() => handleMenu(genre)} key={genre}>
            {genre}
          </div>
        )
      })}
    </div>
    <div className={styles.sort}>
      <span>SORT BY</span>
      <Select value={sortValue} toggleSortValue={toggleSortValue} />
    </div>
  </nav>
)

Navbar.propTypes = {
  genreValue: PropTypes.string.isRequired,
  sortValue: PropTypes.string.isRequired,
  toggleSortValue: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
}
