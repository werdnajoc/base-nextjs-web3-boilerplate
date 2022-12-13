import { createAction } from '@reduxjs/toolkit'

import { ICounterState } from './interfaces'

const increment = createAction<ICounterState>('counter/increment')

export { increment }
