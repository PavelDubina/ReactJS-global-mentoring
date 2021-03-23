import React, { PureComponent } from 'react'
import { Button } from '../Button/Button'
import { AddForm } from '../AddForm/AddForm'
import styles from './Search.scss'

export class Search extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onOpenModal() {
    this.setState({ isOpen: true })
  }

  onCloseModal(event) {
    if (event.target.dataset.close) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    const { isOpen } = this.state
    return (
      <>
        <div className={styles.container}>
          <Button onClick={this.onOpenModal} styleType="adding">
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
        {isOpen && <AddForm onClose={this.onCloseModal} />}
      </>
    )
  }
}
