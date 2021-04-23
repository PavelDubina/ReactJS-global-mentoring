import React from 'react'
import styles from '../../../styles/Button.module.scss'

export enum EType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum EStyleTypeBtn {
  adding = 'adding',
  search = 'search',
  confirm = 'confirm',
  reset = 'reset',
  disabled = 'disabled',
  back_home = 'back_home',
}

export type ButtonProps = {
  type?: EType
  styleType: EStyleTypeBtn
  children: React.ReactNode
  onClick?: () => void
}

// PATTERN:{Destructuring props}
export const Button: React.FC<ButtonProps> = React.memo(({ type = EType.button, styleType, children, onClick }) => (
  <button type={type} onClick={onClick} className={styles[styleType]}>
    {children}
  </button>
))
