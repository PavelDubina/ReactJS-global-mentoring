import React from 'react'
import { useTranslation } from 'next-i18next'
import { Modal } from '../Modal/Modal'
import styles from '../../../styles/SuccessMessage.module.scss'

type SuccessMessageProps = {
  onClose: (isMessage?: boolean) => void
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  const { t } = useTranslation()
  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.img} />
        <h1>{t('success.title')}</h1>
        <p>{t('success.desc')}</p>
      </div>
    </Modal>
  )
}
