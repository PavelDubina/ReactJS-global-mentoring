import React from 'react'
import styles from '../../../styles/Button.module.scss'

export enum EType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

type ButtonProps = {
  type?: EType
  styleType: string
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ type = EType.button, styleType, children, onClick }) => (
  <button type={type} onClick={onClick} className={styles[styleType]}>
    {children}
  </button>
)
