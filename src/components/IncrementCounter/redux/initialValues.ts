import { initialStateData } from 'providers/redux/initialValues'
import { ICounterState } from './interfaces'

export const initialState: ICounterState = {
  ...initialStateData,
  data: {
    count: 0,
  },
}
