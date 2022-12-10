import { useCallback, useState, useEffect } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

type CountryType = {
  code: string
  name: string
  emoji: string
}

type StateType = {
  loading?: boolean
  success?: boolean
  error?: string
  data?: CountryType[]
}

const initialState: StateType = {
  loading: false,
  success: false,
  error: null,
  data: [],
}

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`

type HookResultType = {
  state: StateType
  fetchCountries: () => void
}

export function useGetCountries(): HookResultType {
  const [getQuery, result] = useLazyQuery(QUERY)
  const [state, setState] = useState<StateType>(initialState)

  const stateHandler = (newState: StateType = {}): void =>
    setState({
      ...initialState,
      ...newState,
    })

  const fetchCountries = useCallback(async () => {
    stateHandler({ loading: true })
    await getQuery()
  }, [getQuery])

  useEffect(() => {
    if (result.data) {
      if (result.data.countries) {
        stateHandler({ success: true, data: result.data.countries })
      }
    }
  }, [result])

  return {
    state,
    fetchCountries,
  }
}

export default useGetCountries
