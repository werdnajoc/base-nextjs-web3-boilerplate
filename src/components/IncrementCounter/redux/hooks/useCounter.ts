import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment as incrementAction } from '../actions'
import { ICounterState } from '../interfaces'
import { AppDispatch, AppState } from 'providers/redux/store'

export function useCounter(): [ICounterState, () => void] {
  const dispatch = useDispatch<AppDispatch>()
  const counter = useSelector<AppState, AppState['counter']>(state => state.counter)

  const addCounter = useCallback(() => {
    dispatch(
      incrementAction({
        data: {
          count: counter.data.count + 1,
        },
      })
    )
  }, [counter, dispatch])

  return [counter, addCounter]
}
