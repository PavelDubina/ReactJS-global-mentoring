import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import { FormSelect } from '../FormSelect/FormSelect'
import { Modal } from '../Modal/Modal'
import styles from './EditForm.scss'

export class EditForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      id: props.id,
      release: props.release,
      overview: props.overview,
      runtime: props.runtime,
      genres: props.genres,
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
    const { onClose } = this.props
    const { id, title, release, overview, runtime, genres } = this.state
    return (
      <Modal title="EDIT MOVIE" onClose={onClose}>
        <form className={styles.form}>
          <label className={styles.label}>
            MOVIE ID
            <input className={styles.input} name="id" type="number" value={id} disabled />
          </label>
          <label className={styles.label}>
            TITLE
            <input className={styles.input} name="title" type="text" value={title} onChange={this.handleInputChange} />
          </label>
          <br />
          <label className={styles.label}>
            RELEASE DATE
            <input
              className={styles.input}
              name="release"
              type="date"
              value={release}
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
              onChange={this.handleInputChange}
            />
          </label>
          <div className={styles.btns}>
            <Button type="reset" styleType="reset">
              RESET
            </Button>
            <Button type="submit" styleType="confirm">
              SAVE
            </Button>
          </div>
        </form>
      </Modal>
    )
  }
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
}
