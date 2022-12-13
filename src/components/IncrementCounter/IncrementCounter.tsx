import React from 'react'

import { useInternationalisation } from 'providers/lang'
import { useCounter } from './redux/hooks'

export const IncrementCounter = () => {
  const [counter, addCounter] = useCounter()
  const { t } = useInternationalisation()
  return (
    <div>
      <h1>
        {t('Redux counter')}: <span>{counter.data.count}</span>
      </h1>
      <button className="button" onClick={addCounter}>
        {t('Add To Count')}
      </button>
    </div>
  )
}

export default IncrementCounter
