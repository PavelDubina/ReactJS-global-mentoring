import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import { AddForm } from '../AddForm/AddForm'
import { SuccessMesage } from '../SuccessMasage/SuccessMessage'
import fetchMovies from '../../redux/actions/fetchMovies'
import styles from './Search.scss'

export const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [{ isForm, isMessage }, setIsOpen] = useState({ isForm: false, isMessage: false })
  const { sortBy, filter } = useSelector((state) => state.moviesData)
  const handleChange = (event) => setValue(event.target.value)
  const onOpenModal = () => setIsOpen({ isForm: true, isMessage: false })
  const onCloseModal = (isMessage) => setIsOpen({ isForm: false, isMessage })
  const onSubmit = (event) => {
    dispatch(fetchMovies({ sortBy, filter, search: value }))
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
      {isMessage && <SuccessMesage onClose={onCloseModal} />}
    </>
  )
}
