import { createReducer } from '@reduxjs/toolkit'

import { increment } from './actions'
import { initialState } from './initialValues'

export default createReducer(initialState, builder =>
  builder.addCase(increment, (state, action) => {
    state.data.count = action.payload.data.count
  })
)
