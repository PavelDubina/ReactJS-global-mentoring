import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import { Input } from '../Input/Input'
import addMovie from '../../redux/actions/addMovie'
import styles from './AddForm.scss'

export const AddForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    title: yup.string().required('Required'),
    poster_path: yup.string().required('Required').url('Enter correct url, like http://exmple.com'),
    release_date: yup.date().max(new Date(), 'Release date must be at earler than today').required('Required'),
    genres: yup.array().min(1, 'Select at least one genre to be proceed'),
    overview: yup.string().required('Required'),
    runtime: yup
      .number()
      .required('Required')
      .positive('Runtime must be a positive number')
      .integer('Runtime must be an integer'),
  })
  return (
    <Modal title="ADD MOVIE" onClose={onClose}>
      <Formik
        initialValues={{
          title: '',
          release_date: '',
          overview: '',
          runtime: '',
          genres: [],
          poster_path: '',
        }}
        onSubmit={(values) => {
          dispatch(addMovie(values))
          onClose(true)
        }}
        validationSchema={validationSchema}
      >
        {({ values, touched, errors, handleChange, handleSubmit, handleReset }) => {
          const { title, release_date, overview, runtime, genres, poster_path } = values
          return (
            <>
              <form className={styles.form}>
                <Input title="TITLE" name="title" type="text" value={title} placeholder="Title here" />
                <br />
                <Input
                  title="RELEASE DATE"
                  name="release_date"
                  type="date"
                  value={release_date}
                  style={{ color: release_date ? '#fff' : '#a9a9a9c0' }}
                />
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
                {touched.genres && errors.genres && <p className={styles.error}>{errors.genres}</p>}
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
                  SUBMIT
                </Button>
              </div>
            </>
          )
        }}
      </Formik>
    </Modal>
  )
}

AddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
}
