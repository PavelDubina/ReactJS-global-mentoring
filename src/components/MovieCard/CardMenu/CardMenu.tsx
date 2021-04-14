import React, { useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { useOutsideClick } from '../../../Hooks/useClickOutside'
import styles from '../../../../styles/CardMenu.module.scss'

type CardMenuProps = {
  isOpen: boolean
  toggleMenu: () => void
  onOpenModal: (status: string) => void
}

export const CardMenu: React.FC<CardMenuProps> = ({ isOpen, toggleMenu, onOpenModal }) => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const outsideFunc = isOpen ? toggleMenu : undefined
  useOutsideClick(ref, outsideFunc)
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
          <div className={styles.dropdown_item} onClick={() => onOpenModal('edit')}>
            {t('menu.edit')}
          </div>
          <div className={styles.dropdown_item} onClick={() => onOpenModal('delete')}>
            {t('menu.delete')}
          </div>
        </div>
      )}
    </>
  )
}
