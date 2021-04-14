/* eslint-disable react/state-in-constructor */
import React, { ErrorInfo } from 'react'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends React.PureComponent<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(`${error} : ${errorInfo}`)
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
