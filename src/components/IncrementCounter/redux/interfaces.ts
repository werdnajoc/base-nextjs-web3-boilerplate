import { IAnyDataState } from 'providers/redux/interfaces'

export interface ICounterState extends IAnyDataState {
  data: {
    count: number
  }
}
