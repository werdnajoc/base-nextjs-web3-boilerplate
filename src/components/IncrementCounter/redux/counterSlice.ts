import { createSlice } from '@reduxjs/toolkit'

import { AppState } from 'providers/redux/store'
import { HYDRATE } from 'next-redux-wrapper'

const counterInitialState: number = 0

const nameState = 'incrementCounter'

export const counterSlice = createSlice({
  name: nameState,
  initialState: counterInitialState,
  reducers: {
    setCounterState(state, action) {
      return action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return action.payload[nameState] | state
    },
  },
})

export const { setCounterState } = counterSlice.actions

export const selectCounterState = (state: AppState) => state[nameState]

export default counterSlice.reducer
