import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import deleteMovie from '../../redux/actions/deleteMovie'
import styles from './DeleteForm.scss'

export const DeleteForm = ({ id, onClose }) => {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteMovie(id))
    onClose()
  }
  return (
    <Modal title="DELETE MOVIE" onClose={onClose}>
      <div className={styles.container}>
        <p>Are you sure you want delete this movie?</p>
        <Button onClick={onDelete} styleType="confirm">
          CONFIRM
        </Button>
      </div>
    </Modal>
  )
}
DeleteForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}
