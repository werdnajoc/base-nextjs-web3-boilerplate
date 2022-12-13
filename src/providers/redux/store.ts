import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'

import { masterReducer } from './masterReducer'

const isDev = process.env.NODE_ENV !== 'production'

const store = configureStore({
  devTools: isDev,
  reducer: masterReducer,
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export const reduxWrapper = createWrapper(() => store, { debug: isDev })
