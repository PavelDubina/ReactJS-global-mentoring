import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../Modal/Modal'
import styles from './SuccessMesage.scss'

export const SuccessMesage = ({ onClose }) => (
  <Modal onClose={onClose}>
    <div className={styles.container}>
      <div className={styles.img} />
      <h1>CONGRATULATIONS !</h1>
      <p>The movie has been added to database successfully</p>
    </div>
  </Modal>
)

SuccessMesage.propTypes = {
  onClose: PropTypes.func.isRequired,
}
