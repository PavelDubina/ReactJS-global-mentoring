import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button } from '../Button/Button'
import { AddForm } from '../AddForm/AddForm'
import { SuccessMessage } from '../SuccessMessage/SuccessMessage'
import styles from './Search.scss'

export const Search = () => {
  const history = useHistory()
  const { query } = useParams()
  const [value, setValue] = useState(query)
  const [{ isForm, isMessage }, setIsOpen] = useState({ isForm: false, isMessage: false })
  const handleChange = (event) => setValue(event.target.value)
  const onOpenModal = () => setIsOpen({ isForm: true, isMessage: false })
  const onCloseModal = (isMessage) => setIsOpen({ isForm: false, isMessage })
  const onSubmit = (event) => {
    if (value) {
      history.push(`/search/${value}`)
    } else {
      history.push(`/`)
    }
    event.preventDefault()
  }
  return (
    <>
      <div className={styles.container}>
        <Button onClick={onOpenModal} styleType="adding">
          + ADD MOVIE
        </Button>
        <h1 className={styles.title}>FIND YOUR MOVIE</h1>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            onChange={handleChange}
            className={styles.input}
            type="text"
            value={value}
            placeholder="What do you want to watch?"
          />
          <Button type="submit" styleType="search">
            SEARCH
          </Button>
        </form>
      </div>
      {isForm && <AddForm onClose={onCloseModal} />}
      {isMessage && <SuccessMessage onClose={onCloseModal} />}
    </>
  )
}
