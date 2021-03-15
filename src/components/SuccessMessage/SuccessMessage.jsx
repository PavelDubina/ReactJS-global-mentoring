import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../Modal/Modal'
import styles from './SuccessMessage.scss'

export const SuccessMessage = ({ onClose }) => (
  <Modal onClose={onClose}>
    <div className={styles.container}>
      <div className={styles.img} />
      <h1>CONGRATULATIONS !</h1>
      <p>The movie has been added to database successfully</p>
    </div>
  </Modal>
)

SuccessMessage.propTypes = {
  onClose: PropTypes.func.isRequired,
}
