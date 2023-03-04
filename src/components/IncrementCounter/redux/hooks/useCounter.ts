import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCounterState, selectCounterState } from '../counterSlice'

export function useCounter(): [number, () => void] {
  const dispatch = useDispatch()
  const counterState = useSelector(selectCounterState)

  const addCounter = useCallback(() => {
    dispatch(
        setCounterState(counterState + 1)
    )
  }, [counterState, dispatch])

  return [counterState, addCounter]
}
