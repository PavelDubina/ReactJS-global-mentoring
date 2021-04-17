import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Button, EStyleTypeBtn, EType } from '../Button/Button'
import { AddForm } from '../AddForm/AddForm'
import { SuccessMessage } from '../SuccessMessage/SuccessMessage'
import styles from '../../../styles/Search.module.scss'

export const Search: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { query } = router.query
  const [value, setValue] = useState('')
  const [{ isForm, isMessage }, setIsOpen] = useState({ isForm: false, isMessage: false })
  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
  const onOpenModal = () => setIsOpen({ isForm: true, isMessage: false })
  const onCloseModal = (isMessage?: boolean) => setIsOpen({ isForm: false, isMessage: isMessage ?? false })
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    if (value) {
      router.push(`/search/${value}`)
    } else {
      router.push(`/`)
    }
    event.preventDefault()
  }
  useEffect(() => {
    if (router.isReady) setValue(query !== undefined ? String(query) : '')
  }, [query])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.add_btn}>
          <Button onClick={onOpenModal} styleType={EStyleTypeBtn.adding}>
            {t('search.addBtn')}
          </Button>
        </div>
        <h1 className={styles.title}>{t('search.title')}</h1>
        {/* PATTERN:{Controlled input} */}
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            value={value}
            placeholder={t('search.placeholder')}
          />
          <div className={styles.search_btn}>
            <Button type={EType.submit} styleType={EStyleTypeBtn.search}>
              {t('search.searchBtn')}
            </Button>
          </div>
        </form>
      </div>
      {isForm && <AddForm onClose={onCloseModal} />}
      {isMessage && <SuccessMessage onClose={onCloseModal} />}
    </>
  )
}
