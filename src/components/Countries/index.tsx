import React, { useState, useEffect } from 'react'

import { useBeforeFirstRender } from 'shared/hooks/commons'
import { useGetCountries } from 'shared/hooks/trevorblades'

import { ClientOnly } from 'components/ClientOnly'
import { BaseSelect } from 'components/BaseSelect'
import { useTranslation } from 'providers/lang'

export const Countries = ({ className, icon, small }: any) => {
  const [mounted, setMounted] = useState(false)
  const { state, fetchCountries } = useGetCountries()
  const { t } = useTranslation()

  useBeforeFirstRender(() => {
    fetchCountries()
  })

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <ClientOnly>
      {state.success && (
        <BaseSelect
          onChange={value => {}}
          defaultValue={t('components.countries.select.defaultValue')}
          options={state.data.map(row => ({
            value: row.code,
            label: row.name,
            keyId: row.code,
          }))}
        />
      )}
    </ClientOnly>
  )
}

export default Countries
