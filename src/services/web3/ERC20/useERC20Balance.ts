import { useState, useCallback } from 'react'
import { BigNumber } from 'ethers'
import { Address } from 'wagmi'

import { logHelpers } from 'shared/helpers'
import { useERC20BuilderContract } from 'providers/web3/hooks/builders'

interface HookParams {
  address: Address
}

type HookState = {
  loading?: boolean
  success?: boolean
  error?: string
  data?: BigNumber
}

const initialState: HookState = {
  loading: false,
  success: false,
  error: null,
  data: BigNumber.from(0),
}

interface HooResult {
  state: HookState
  fetchBalance: ({ address }: { address: Address }) => void
}

export function useERC20Balance(params: HookParams): HooResult {
  const [state, setState] = useState<HookState>(initialState)

  const _contract = useERC20BuilderContract({ address: params.address })

  const stateHandler = (newState: HookState = {}) =>
    setState({
      ...initialState,
      ...newState,
    })

  const fetchBalance = useCallback(
    async ({ address, silent }: { address: Address; silent?: boolean }) => {
      try {
        if (!_contract || !address) return

        if (!silent) stateHandler({ loading: true })
        const _balance = await _contract.balanceOf(address)
        stateHandler({ data: _balance, success: true })
      } catch (error) {
        logHelpers.error('fetchBalance error: ', error)
        stateHandler({ error })
      }
    },
    [_contract]
  )

  return {
    state,
    fetchBalance,
  }
}

export default useERC20Balance
