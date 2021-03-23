import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import styles from './AddForm.scss'

export const AddForm = ({ onClose }) => {
  const [state, setState] = useState({
    title: '',
    release: '',
    overview: '',
    runtime: '',
    genres: [],
  })
  const { title, release, overview, runtime, genres } = state
  const handleInputChange = (event) => {
    const { value, name, type, checked } = event.target
    if (type !== 'checkbox') {
      setState({ ...state, [name]: value })
    } else if (checked) {
      if (genres.includes(value)) return
      setState((state) => ({ ...state, genres: [...state.genres, value] }))
    } else {
      setState((state) => ({ ...state, genres: state.genres.filter((genre) => genre !== value) }))
    }
  }
  return (
    <Modal title="ADD MOVIE" onClose={onClose}>
      <form className={styles.form}>
        <label className={styles.label}>
          TITLE
          <input
            className={styles.input}
            name="title"
            type="text"
            value={title}
            placeholder="Title here"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className={styles.label}>
          RELEASE DATE
          <input
            className={styles.input}
            name="release"
            type="date"
            value={release}
            style={{ color: release ? '#fff' : '' }}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <FormSelect value={genres.join(', ')} onChange={handleInputChange} />
        <br />
        <label className={styles.label}>
          OVERVIEW
          <input
            className={styles.input}
            name="overview"
            type="text"
            value={overview}
            placeholder="Overview here"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className={styles.label}>
          RUNTIME
          <input
            className={styles.input}
            name="runtime"
            type="text"
            value={runtime}
            placeholder="Runtime here"
            onChange={handleInputChange}
          />
        </label>
        <div className={styles.btns}>
          <Button type="reset" styleType="reset">
            RESET
          </Button>
          <Button type="submit" styleType="confirm">
            SUBMIT
          </Button>
        </div>
      </form>
    </Modal>
  )
}

AddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
}
