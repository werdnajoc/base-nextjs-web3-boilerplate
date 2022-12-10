import { useCallback, useContext } from 'react'
import { useIntl } from 'react-intl'

import { InternationalisationContext } from './Provider'

export const useInternationalisation = () => {
  const context = useContext(InternationalisationContext)
  const intl = useIntl()

  const t = useCallback(
    (id: string): string => {
      return intl.formatMessage({ id })
    },
    [intl]
  )

  if (context === undefined) {
    throw new Error('internationalisation context is undefined')
  }

  return {
    ...context,
    t,
  }
}

export default useInternationalisation
