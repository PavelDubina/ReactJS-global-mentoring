import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { AddForm } from '../AddForm/AddForm'
import styles from './Search.scss'

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpenModal = () => {
    setIsOpen(true)
  }
  const onCloseModal = (event) => {
    if (event.target.dataset.close) {
      setIsOpen(false)
    }
  }
  return (
    <>
      <div className={styles.container}>
        <Button onClick={onOpenModal} styleType="adding">
          + ADD MOVIE
        </Button>
        <h1 className={styles.title}>FIND YOUR MOVIE</h1>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="What do you want to watch?" />
          <Button type="submit" styleType="search">
            SEARCH
          </Button>
        </form>
      </div>
      {isOpen && <AddForm onClose={onCloseModal} />}
    </>
  )
}
