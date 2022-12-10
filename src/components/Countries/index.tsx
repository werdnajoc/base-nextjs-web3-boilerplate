import React, { useState, useEffect } from 'react'

import { useBeforeFirstRender } from 'shared/hooks/commons'
import { useGetCountries } from 'shared/hooks/trevorblades'

import { ClientOnly } from 'components/ClientOnly'

export const Countries = ({ className, icon, small }: any) => {
  const [mounted, setMounted] = useState(false)
  const { state, fetchCountries } = useGetCountries()

  useBeforeFirstRender(() => {
    fetchCountries()
  })

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <ClientOnly>
      {state.success && (
        <select>
          {state.data.map(row => (
            <option key={row.code}>{row.name}</option>
          ))}
        </select>
      )}
    </ClientOnly>
  )
}

export default Countries
