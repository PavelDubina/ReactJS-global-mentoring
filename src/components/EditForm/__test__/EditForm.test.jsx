import React from 'react'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import movies from '../../../MockedData/mockMovies.json'
import { EditForm } from '../EditForm'

const mockStore = configureStore([])

describe('EditForm', () => {
  const store = mockStore({
    moviesData: movies,
  })
  ReactDOM.createPortal = jest.fn((element) => element)
  const props = {
    title: 'test title',
    id: 1,
    release_date: '12/12/2020',
    overview: 'test overview',
    runtime: 100,
    genres: ['comedy'],
    poster_path: 'test path',
  }
  const getComponent = ({ onClose = jest.fn() }) =>
    render(
      <Provider store={store}>
        <EditForm onClose={onClose} {...props} />
      </Provider>,
    )
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should renders correctly without runtime value', () => {
    const props = {
      title: 'test title',
      id: 1,
      release_date: '12/12/2020',
      overview: 'test overview',
      genres: ['comedy'],
      poster_path: 'test path',
    }
    const getComponent = ({ onClose = jest.fn() }) =>
      render(
        <Provider store={store}>
          <EditForm onClose={onClose} {...props} />
        </Provider>,
      )
    expect(getComponent({}).asFragment()).toMatchSnapshot()
  })
  it('Should show validation on blur and empty field', async () => {
    const { getByTestId } = getComponent({})
    const input = getByTestId('title')
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.blur(input)
    await waitFor(() => {
      expect(getByTestId('error')).not.toBe(null)
      expect(getByTestId('error')).toHaveTextContent('Required')
    })
  })
})
