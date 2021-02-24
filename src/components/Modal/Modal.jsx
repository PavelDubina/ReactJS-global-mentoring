import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './Modal.scss'

export class Modal extends PureComponent {
  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset'
  }

  render() {
    const { title, onClose, children } = this.props
    return ReactDOM.createPortal(
      <div onClick={onClose} data-close className={styles.modal_backdrop}>
        <div className={styles.modal_window}>
          <div data-close className={styles.close_btn}>
            &#215;
          </div>
          <h1 className={styles.title}>{title}</h1>
          {children}
        </div>
      </div>,
      document.querySelector('#modal-root'),
    )
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
