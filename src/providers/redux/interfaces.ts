interface IBaseState {
  loading?: boolean
  success?: boolean
  error?: string
}

export interface IArrayDataState extends IBaseState {
  data?: any[]
}

export interface IAnyDataState extends IBaseState {
  data?: any
}

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
