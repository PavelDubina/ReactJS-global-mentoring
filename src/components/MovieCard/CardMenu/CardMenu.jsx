import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardMenu.scss'

export const CardMenu = ({ isOpen, toggleMenu, onOpenModal }) => (
  <>
    <div onClick={toggleMenu} className={styles.menu}>
      <div />
      <div />
      <div />
    </div>
    {isOpen && (
      <div className={styles.dropdown}>
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

CardMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
}
