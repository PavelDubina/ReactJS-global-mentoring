import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import { AddForm } from '../AddForm/AddForm'
import fetchMovies from '../../redux/actions/fetchMovies'
import styles from './Search.scss'

export const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { sortBy, filter } = useSelector((state) => state.moviesData)
  const handleChange = (event) => setValue(event.target.value)
  const onOpenModal = () => setIsOpen(true)
  const onCloseModal = (event) => event.target.dataset.close && setIsOpen(false)
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchMovies({ sortBy, filter, search: value }))
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
      {isOpen && <AddForm onClose={onCloseModal} />}
    </>
  )
}
