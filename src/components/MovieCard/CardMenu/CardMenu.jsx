import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useOutsideClick } from '../../../Hooks/useClickOutside'
import styles from '../../../../styles/CardMenu.module.scss'

export const CardMenu = ({ isOpen, toggleMenu, onOpenModal }) => {
  const ref = useRef()
  useOutsideClick(ref, isOpen && toggleMenu)
  return (
    <>
      <div data-testid="card-menu" onClick={toggleMenu} className={styles.menu}>
        <div />
        <div />
        <div />
      </div>
      {isOpen && (
        <div ref={ref} className={styles.dropdown}>
          <div className={styles.dropdown_close} onClick={toggleMenu}>
            &#215;
          </div>
          <div className={styles.dropdown_item} onClick={onOpenModal}>
            Edit
          </div>
          <div className={styles.dropdown_item} onClick={onOpenModal}>
            Delete
          </div>
        </div>
      )}
    </>
  )
}

CardMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
}
