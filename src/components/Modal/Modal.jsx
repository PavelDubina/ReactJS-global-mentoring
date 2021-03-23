import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useOutsideClick } from '../../Hooks/useClickOutside'
import styles from '../../../styles/Modal.module.scss'

export const Modal = ({ title = '', onClose, children }) => {
  const ref = useRef()
  useOutsideClick(ref, onClose)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'unset')
  })
  return ReactDOM.createPortal(
    <div className={styles.modal_backdrop}>
      <div ref={ref} className={styles.modal_window}>
        <div onClick={() => onClose()} className={styles.close_btn}>
          &#215;
        </div>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>,
    document.querySelector('#modal-root'),
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
