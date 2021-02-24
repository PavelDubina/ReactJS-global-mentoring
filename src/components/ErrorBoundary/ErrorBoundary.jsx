import React from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(`${error} : ${errorInfo}`) // eslint-disable-line no-console
    this.setState({ hasError: true })
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state
    return hasError ? (
      <h2 style={{ flexGrow: 1, textAlign: 'center' }}>
        Ooops, something went wrong... We are doing our best to fix issue
      </h2>
    ) : (
      children
    )
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}
