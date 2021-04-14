import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { TAppState } from './reducers/rootReducer'

type TCreateStore = typeof initStore
type TItitStore = ReturnType<TCreateStore>

let store: TItitStore | undefined

const initStore = (initialState: TAppState | object) =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export const initializeStore = (preloadedState: TAppState | object) => {
  let _store = store ?? initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}
export const useStore = (initialState: TAppState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
export default store
