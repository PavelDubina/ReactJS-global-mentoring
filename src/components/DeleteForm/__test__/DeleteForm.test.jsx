import React from 'react'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import movies from '../../../MockedData/mockMovies.json'
import { DeleteForm } from '../DeleteForm'

const mockStore = configureStore([])

describe('DeleteForm', () => {
  const store = mockStore({
    moviesData: movies,
  })
  ReactDOM.createPortal = jest.fn((element) => element)
  const getComponent = ({ onClose = jest.fn(), id = 86834 }) =>
    render(
      <Provider store={store}>
        <DeleteForm id={id} onClose={onClose} />
      </Provider>,
    )
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('onClose and dispatch have been called', () => {
    store.dispatch = jest.fn()
    const onClose = jest.fn()
    const { getByRole } = getComponent({ onClose })
    fireEvent.click(getByRole('button'))
    expect(store.dispatch).toBeCalled()
    expect(onClose).toBeCalled()
  })
})
