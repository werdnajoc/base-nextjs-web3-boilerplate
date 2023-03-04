import React from 'react'
import { useTranslation } from 'providers/lang'

import { useCounter } from 'components/IncrementCounter/redux/hooks'
import { BaseButton } from 'components/BaseButton'

export const IncrementCounter = () => {
  const [counter, addCounter] = useCounter()

  const { t } = useTranslation()
  return (
    <div>
      <h1>
        {t('Redux counter')}: <span>{counter}</span>
      </h1>
      <BaseButton text={t('Add To Count')} onClick={() => addCounter()} />
    </div>
  )
}

export default IncrementCounter
