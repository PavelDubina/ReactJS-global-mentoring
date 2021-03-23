import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import styles from './EditForm.scss'

export const EditForm = (props) => {
  const [state, setState] = useState({
    title: props.title,
    id: props.id,
    release: props.release,
    overview: props.overview,
    runtime: props.runtime,
    genres: props.genres,
  })
  const { title, id, release, overview, runtime, genres } = state
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
    <Modal title="EDIT MOVIE" onClose={props.onClose}>
      <form className={styles.form}>
        <label className={styles.label}>
          MOVIE ID
          <input className={styles.input} name="id" type="number" value={id} disabled />
        </label>
        <label className={styles.label}>
          TITLE
          <input className={styles.input} name="title" type="text" value={title} onChange={handleInputChange} />
        </label>
        <br />
        <label className={styles.label}>
          RELEASE DATE
          <input className={styles.input} name="release" type="date" value={release} onChange={handleInputChange} />
        </label>
        <br />
        <FormSelect value={genres.join(', ')} onChange={handleInputChange} />
        <br />
        <label className={styles.label}>
          OVERVIEW
          <input className={styles.input} name="overview" type="text" value={overview} onChange={handleInputChange} />
        </label>
        <br />
        <label className={styles.label}>
          RUNTIME
          <input className={styles.input} name="runtime" type="text" value={runtime} onChange={handleInputChange} />
        </label>
        <div className={styles.btns}>
          <Button type="reset" styleType="reset">
            RESET
          </Button>
          <Button type="submit" styleType="confirm">
            SAVE
          </Button>
        </div>
      </form>
    </Modal>
  )
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
}
