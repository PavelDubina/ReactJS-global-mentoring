import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.scss'

export const Input = ({ title, name, type, value = '', onChange, placeholder = '', style = {}, disabled = false }) => (
  <label className={styles.label}>
    {title}
    <input
      className={styles.input}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      style={style}
      onChange={onChange}
      autoComplete="off"
    />
  </label>
)

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}
