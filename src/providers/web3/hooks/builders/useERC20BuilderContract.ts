import { useContract, useProvider, erc20ABI } from 'wagmi'

interface HookParams {
  address: string
}

export function useERC20BuilderContract(params: HookParams) {
  const provider = useProvider()
  const contract = useContract({
    address: params.address,
    abi: erc20ABI,
    signerOrProvider: provider,
  })

  return contract
}

export default useERC20BuilderContract
