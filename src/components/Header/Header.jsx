import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Header.scss'

export const Header = ({ children }) => (
  <header className={styles.container}>
    <div className={styles.container_shadow} />
    <section className={styles.section}>
      <Link to="/">
        <span className={styles.logo}>
          <b>netflix</b>
          roulette
        </span>
      </Link>
      {children}
    </section>
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}
