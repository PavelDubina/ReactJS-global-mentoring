import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import styles from './DeleteForm.scss'

export const DeleteForm = ({ onClose }) => (
  <Modal title="DELETE FORM" onClose={onClose}>
    <div className={styles.container}>
      <p>Are you sure you want delete this movie?</p>
      <Button styleType="confirm">CONFIRM</Button>
    </div>
  </Modal>
)

DeleteForm.propTypes = {
  onClose: PropTypes.func.isRequired,
}
