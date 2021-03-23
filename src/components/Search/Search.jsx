import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from '../Button/Button'
import { AddForm } from '../AddForm/AddForm'
import { SuccessMessage } from '../SuccessMessage/SuccessMessage'
import styles from '../../../styles/Search.module.scss'

export const Search = () => {
  const router = useRouter()
  const { query } = router.query
  const [value, setValue] = useState('')
  const [{ isForm, isMessage }, setIsOpen] = useState({ isForm: false, isMessage: false })
  const handleChange = (event) => setValue(event.target.value)
  const onOpenModal = () => setIsOpen({ isForm: true, isMessage: false })
  const onCloseModal = (isMessage) => setIsOpen({ isForm: false, isMessage })
  const onSubmit = (event) => {
    if (value) {
      router.push(`/search/${value}`)
    } else {
      router.push(`/`)
    }
    event.preventDefault()
  }
  useEffect(() => {
    if (router.isReady) setValue(query || '')
  }, [query])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.add_btn}>
          <Button onClick={onOpenModal} styleType="adding">
            + ADD MOVIE
          </Button>
        </div>
        <h1 className={styles.title}>FIND YOUR MOVIE</h1>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            value={value}
            placeholder="What do you want to watch?"
          />
          <div className={styles.search_btn}>
            <Button type="submit" styleType="search">
              SEARCH
            </Button>
          </div>
        </form>
      </div>
      {isForm && <AddForm onClose={onCloseModal} />}
      {isMessage && <SuccessMessage onClose={onCloseModal} />}
    </>
  )
}
