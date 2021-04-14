import React from 'react'
import { useField } from 'formik'
import styles from '../../../styles/Input.module.scss'

type InputProps = {
  title: string
  name: string
  type: string
  value: string | number
  placeholder?: string
  style?: { [key: string]: string }
  disabled?: boolean
}

export const Input: React.FC<InputProps> = ({ title, ...props }) => {
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
