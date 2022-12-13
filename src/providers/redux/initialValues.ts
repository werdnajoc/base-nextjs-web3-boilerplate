import { IAnyDataState, IArrayDataState } from './interfaces'

export const initialStateWithArrayData: IArrayDataState = {
  loading: false,
  success: false,
  error: null,
  data: [],
}

export const initialStateData: IAnyDataState = {
  loading: false,
  success: false,
  error: null,
  data: null,
}
