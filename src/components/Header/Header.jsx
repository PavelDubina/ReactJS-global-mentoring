import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.scss'

export const Header = ({ children }) => (
  <header className={styles.container}>
    <div className={styles.container_shadow} />
    <section className={styles.section}>
      <span className={styles.logo}>
        <b>netflix</b>
        roulette
      </span>
      {children}
    </section>
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}
