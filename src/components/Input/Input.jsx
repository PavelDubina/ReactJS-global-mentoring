import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import styles from '../../../styles/Input.module.scss'

export const Input = ({ title, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <label className={styles.label}>
      {title}
      <input data-testid={props.name} {...field} {...props} className={styles.input} autoComplete="off" />
      {meta.touched && meta.error ? (
        <p data-testid="error" className={styles.error}>
          {meta.error}
        </p>
      ) : null}
    </label>
  )
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
}
