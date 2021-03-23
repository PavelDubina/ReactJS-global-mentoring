import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../styles/Button.module.scss'

export const Button = ({ type = 'button', styleType, children, onClick }) => (
  <button type={type} onClick={onClick} className={styles[styleType]}>
    {children}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  styleType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
