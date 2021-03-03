import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.scss'

export const Button = ({ type, children }) => <button className={styles[type]}>{children}</button>

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
