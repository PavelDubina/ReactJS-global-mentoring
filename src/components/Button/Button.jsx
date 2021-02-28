import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.scss'

export const Button = ({ isClose, styleType, children, onClick }) => (
  <button data-close={isClose} onClick={onClick} className={styles[styleType]}>
    {children}
  </button>
)

Button.propTypes = {
  isClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
  styleType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
