import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'next-i18next'
import { Button, EStyleTypeBtn, EType } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import { Input } from '../Input/Input'
import addMovie from '../../redux/actions/addMovie'
import styles from '../../../styles/AddForm.module.scss'

type AddFormProps = {
  onClose: (isMessage?: boolean) => void
}

// PATTERN:{Destructuring props}
export const AddForm: React.FC<AddFormProps> = ({ onClose }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    title: yup.string().required(t('addModal.validation.title')),
    poster_path: yup
      .string()
      .required(t('addModal.validation.poster.required'))
      .url(t('addModal.validation.poster.url')),
    release_date: yup
      .date()
      .max(new Date(), t('addModal.validation.date.max'))
      .required(t('addModal.validation.date.required')),
    genres: yup.array().min(1, t('addModal.validation.genre')),
    overview: yup.string().required(t('addModal.validation.overview')),
    runtime: yup
      .number()
      .required(t('addModal.validation.runtime.required'))
      .positive(t('addModal.validation.runtime.positive'))
      .integer(t('addModal.validation.runtime.integer')),
  })
  return (
    <Modal title={t('addModal.title')} onClose={onClose}>
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
                <Input
                  title={t('addModal.input.title')}
                  name="title"
                  type="text"
                  value={title}
                  placeholder={t('addModal.placeholders.title')}
                />
                <br />
                <Input
                  title={t('addModal.input.date')}
                  name="release_date"
                  type="date"
                  value={release_date}
                  style={{ color: release_date ? '#fff' : '#a9a9a9c0' }}
                />
                <br />
                <Input
                  title={t('addModal.input.poster')}
                  name="poster_path"
                  type="text"
                  value={poster_path}
                  placeholder={t('addModal.placeholders.poster')}
                />
                <br />
                <FormSelect name="genres" value={genres.join(', ')} onChange={handleChange} />
                {touched.genres && errors.genres && <p className={styles.error}>{errors.genres}</p>}
                <br />
                <Input
                  title={t('addModal.input.overview')}
                  name="overview"
                  type="text"
                  value={overview}
                  placeholder={t('addModal.placeholders.overview')}
                />
                <br />
                <Input
                  title={t('addModal.input.runtime')}
                  name="runtime"
                  type="number"
                  value={runtime}
                  placeholder={t('addModal.placeholders.runtime')}
                />
              </form>
              <div className={styles.btns}>
                <Button onClick={handleReset} styleType={EStyleTypeBtn.reset}>
                  {t('addModal.reset')}
                </Button>
                <Button type={EType.submit} onClick={handleSubmit} styleType={EStyleTypeBtn.confirm}>
                  {t('addModal.submit')}
                </Button>
              </div>
            </>
          )
        }}
      </Formik>
    </Modal>
  )
}
