import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import deleteMovie from '../../redux/actions/deleteMovie'
import styles from '../../../styles/DeleteForm.module.scss'

type DeleteFormProps = {
  id: number
  onClose: () => void
}

export const DeleteForm: React.FC<DeleteFormProps> = ({ id, onClose }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteMovie(id))
    onClose()
  }
  return (
    <Modal title={t('deleteModal.title')} onClose={onClose}>
      <div className={styles.container}>
        <p>{t('deleteModal.description')}</p>
        <div className={styles.confirm_btn}>
          <Button onClick={onDelete} styleType="confirm">
            {t('deleteModal.deleteBtn')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
