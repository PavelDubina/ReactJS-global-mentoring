import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'next-i18next'
import { Button, EStyleTypeBtn, EType } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import { Input } from '../Input/Input'
import editMovie from '../../redux/actions/editMovie'
import styles from '../../../styles/EditForm.module.scss'

type EditFormProps = {
  id: number
  title: string
  release_date: string
  overview: string
  runtime: number | string
  genres: string[]
  poster_path: string
  vote_average: number
  vote_count: number
  onClose: () => void
}

// PATTERN:{Destructuring props}
// PATTERN:{JSX spread attributes}
export const EditForm: React.FC<EditFormProps> = ({ onClose, ...props }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    title: yup.string().required(t('editModal.validation.title')),
    poster_path: yup
      .string()
      .required(t('editModal.validation.poster.required'))
      .url(t('editModal.validation.poster.url')),
    release_date: yup
      .date()
      .max(new Date(), t('editModal.validation.date.max'))
      .required(t('editModal.validation.date.required')),
    genres: yup.array().min(1, t('editModal.validation.genre')),
    overview: yup.string().required(t('editModal.validation.overview')),
    runtime: yup
      .number()
      .required(t('editModal.validation.runtime.required'))
      .positive(t('editModal.validation.runtime.positive'))
      .integer(t('editModal.validation.runtime.integer')),
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
    <Modal title={t('editModal.title')} onClose={onClose}>
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
                <Input title={t('editModal.input.id')} name="id" type="number" value={id} disabled />
                <Input
                  title={t('editModal.input.title')}
                  name="title"
                  type="text"
                  value={title}
                  placeholder={t('editModal.placeholders.title')}
                />
                <br />
                <Input title={t('editModal.input.date')} name="release_date" type="date" value={release_date} />
                <br />
                <Input
                  title={t('editModal.input.poster')}
                  name="poster_path"
                  type="text"
                  value={poster_path}
                  placeholder={t('editModal.placeholders.poster')}
                />
                <br />
                <FormSelect name="genres" value={genres.join(', ')} onChange={handleChange} />
                {errors.genres && <p className={styles.error}>{errors.genres}</p>}
                <br />
                <Input
                  title={t('editModal.input.overview')}
                  name="overview"
                  type="text"
                  value={overview}
                  placeholder={t('editModal.placeholders.overview')}
                />
                <br />
                <Input
                  title={t('editModal.input.runtime')}
                  name="runtime"
                  type="number"
                  value={runtime}
                  placeholder={t('editModal.placeholders.runtime')}
                />
              </form>
              <div className={styles.btns}>
                <Button onClick={handleReset} styleType={EStyleTypeBtn.reset}>
                  {t('editModal.reset')}
                </Button>
                <Button type={EType.submit} onClick={handleSubmit} styleType={EStyleTypeBtn.confirm}>
                  {t('editModal.submit')}
                </Button>
              </div>
            </>
          )
        }}
      </Formik>
    </Modal>
  )
}
