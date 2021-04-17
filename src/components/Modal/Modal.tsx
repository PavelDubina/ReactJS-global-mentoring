import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useOutsideClick } from '../../Hooks/useClickOutside'
import styles from '../../../styles/Modal.module.scss'

export type ModalProps = {
  title?: string
  onClose: (isMessage?: boolean) => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ title = '', onClose, children }) => {
  const ref = useRef(null)
  useOutsideClick(ref, onClose)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '10px'
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0'
    }
  }, [])
  return ReactDOM.createPortal(
    <div className={styles.modal_backdrop}>
      <div ref={ref} className={styles.modal_window}>
        <div onClick={() => onClose(false)} className={styles.close_btn}>
          &#215;
        </div>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>,
    document.querySelector('#modal-root') as HTMLElement,
  )
}
