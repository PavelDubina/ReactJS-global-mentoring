import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import { Input } from '../Input/Input'
import editMovie from '../../redux/actions/editMovie'
import styles from './EditForm.scss'

export const EditForm = ({ onClose, ...props }) => {
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    title: yup.string().required('Required'),
    poster_path: yup.string().required('Required').url('Enter correct url, like as http://exmple.com'),
    release_date: yup.date().max(new Date(), 'Release date must be at earler than today').required('Required'),
    genres: yup.array().min(1, 'Select at least one genre to be proceed'),
    overview: yup.string().required('Required'),
    runtime: yup
      .number()
      .required('Required')
      .positive('Runtime must be a positive number')
      .integer('Runtime must be an integer'),
  })
  const initialValues = {
    title: props.title,
    id: props.id,
    release_date: props.release_date,
    overview: props.overview,
    runtime: props.runtime || '',
    genres: props.genres.map((genre) => genre.toLowerCase()),
    poster_path: props.poster_path,
  }
  return (
    <Modal title="EDIT MOVIE" onClose={onClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(editMovie({ ...props, ...values }))
          onClose()
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleSubmit, handleReset }) => {
          const { id, title, release_date, overview, runtime, genres, poster_path } = values
          return (
            <>
              <form className={styles.form}>
                <Input title="MOVIE ID" name="id" type="number" value={id} disabled />
                <Input title="TITLE" name="title" type="text" value={title} placeholder="Title here" />
                <br />
                <Input title="RELEASE DATE" name="release_date" type="date" value={release_date} />
                <br />
                <Input
                  title="POSTER PATH"
                  name="poster_path"
                  type="text"
                  value={poster_path}
                  placeholder="Poster URL here"
                />
                <br />
                <FormSelect name="genres" value={genres.join(', ')} onChange={handleChange} />
                {errors.genres && <p className={styles.error}>{errors.genres}</p>}
                <br />
                <Input title="OVERVIEW" name="overview" type="text" value={overview} placeholder="Overview here" />
                <br />
                <Input title="RUNTIME" name="runtime" type="number" value={runtime} placeholder="Runtime here" />
              </form>
              <div className={styles.btns}>
                <Button onClick={handleReset} styleType="reset">
                  RESET
                </Button>
                <Button type="submit" onClick={handleSubmit} styleType="confirm">
                  SAVE
                </Button>
              </div>
            </>
          )
        }}
      </Formik>
    </Modal>
  )
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.string,
  vote_count: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}
