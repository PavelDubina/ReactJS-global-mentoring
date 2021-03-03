import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.scss'

export const Header = ({ children }) => (
  <>
    <div className={styles.container}>
      <div className={styles.container_shadow} />
      <div className={styles.section}>
        <span className={styles.logo}>
          <b>netflix</b>
          roulette
        </span>
        {children}
      </div>
    </div>
  </>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}
