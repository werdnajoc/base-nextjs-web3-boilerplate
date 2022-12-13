import { AnyAction } from 'redux'
import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import counterReducer from 'components/IncrementCounter/redux/reducer'
import { ICounterState } from 'components/IncrementCounter/redux/interfaces'

export interface ReduxAppState extends AnyAction {
  counter: ICounterState
}

export interface ReduxActions extends AnyAction {
  payload: ReduxAppState
}

const combinedReducer = combineReducers({
  counter: counterReducer,
})

export const masterReducer = (state: ReduxAppState, action: ReduxActions) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      counter: {
        ...state.counter,
        data: {
          count: action.payload.counter.data.count,
        },
      },
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}
