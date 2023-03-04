interface IBaseASyncState {
  loading?: boolean
  success?: boolean
  error?: string
}

export interface IASyncArrayState extends IBaseASyncState {
  data?: any[]
}

export interface IASyncAnyState extends IBaseASyncState {
  data?: any
}

export const initialAsyncArrayState: IASyncArrayState = {
  loading: false,
  success: false,
  error: null,
  data: [],
}

export const initialAsyncAnyState: IASyncAnyState = {
  loading: false,
  success: false,
  error: null,
  data: null,
}
