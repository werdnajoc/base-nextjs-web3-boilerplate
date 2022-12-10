import { ethers } from 'ethers'
import { simpleRpcProvider } from 'helpers/providers'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

// ABI
import erc20Abi from 'config/abi/erc20.json'
import originFactoryAbi from 'config/abi/OriginFactory.json'
import alphaRegistryAbi from 'config/abi/AlphaRegistry.json'
import originStrategyAbi from 'config/abi/OriginStrategy.json'

import pancakeSwapRouterAbi from 'config/abi/PancakeSwapRouter.json'
import pancakeSwapFactoryAbi from 'config/abi/PancakeFactory.json'
import lUSDAbi from 'config/abi/LUSD.json'

import logHelpers from './logHelpers'

export function getSigner(
  library: Web3Provider,
  account: string,
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(
  library: Web3Provider,
  account?: string,
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

export const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  try {
    const signerOrProvider = signer ?? simpleRpcProvider
    return new ethers.Contract(address, abi, signerOrProvider)
  } catch (error) {
    logHelpers.log('getContract error:', error)
    return null
  }
}

export const getERC20Contract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(erc20Abi, address, signer)
}

export const getOriginFactoryContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(originFactoryAbi, address, signer)
}

export const getOriginStratgyContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(originStrategyAbi, address, signer)
}

export const getAlphaRegistryContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(alphaRegistryAbi, address, signer)
}

export const getOriginStrategyContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(originStrategyAbi, address, signer)
}

export const getPancakeSwapRouterContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(pancakeSwapRouterAbi, address, signer)
}

export const getPancakeSwapFactoryContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(pancakeSwapFactoryAbi, address, signer)
}

export const getLUSDContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(lUSDAbi, address, signer)
}