import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import styles from './AddForm.scss'

export class AddForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      release: '',
      overview: '',
      runtime: '',
      genres: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const { genres } = this.state
    const { value, name, type, checked } = event.target
    if (type !== 'checkbox') {
      this.setState({ [name]: value })
    } else if (checked) {
      if (genres.includes(value)) return
      this.setState((prevState) => ({ genres: [...prevState.genres, value] }))
    } else {
      this.setState((prevState) => ({ genres: prevState.genres.filter((genre) => genre !== value) }))
    }
  }

  render() {
    const { title, release, overview, runtime, genres } = this.state
    const { onClose } = this.props
    return (
      <Modal title="ADD MOVIE" onClose={onClose}>
        <form className={styles.form}>
          <label className={styles.label}>
            TITLE
            <input
              className={styles.input}
              name="title"
              type="text"
              value={title}
              placeholder="Title here"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label className={styles.label}>
            RELEASE DATE
            <input
              className={styles.input}
              name="release"
              type="date"
              value={release}
              style={{ color: release ? '#fff' : '' }}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <FormSelect value={genres.join(', ')} onChange={this.handleInputChange} />
          <br />
          <label className={styles.label}>
            OVERVIEW
            <input
              className={styles.input}
              name="overview"
              type="text"
              value={overview}
              placeholder="Overview here"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label className={styles.label}>
            RUNTIME
            <input
              className={styles.input}
              name="runtime"
              type="text"
              value={runtime}
              placeholder="Runtime here"
              onChange={this.handleInputChange}
            />
          </label>
          <div className={styles.btns}>
            <Button type="reset" styleType="reset">
              RESET
            </Button>
            <Button type="submit" styleType="confirm">
              SUBMIT
            </Button>
          </div>
        </form>
      </Modal>
    )
  }
}

AddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
}
