import { BigNumber, ethers } from 'ethers'

import { unixTimeToDateTime, secondToDays } from './date'

export const ONE_ETHER_STRING = `${1e18}`
export const ONE_ETHER_IN_BIG_NUMBER = BigNumber.from(ONE_ETHER_STRING)
export const ZERO_ETHER = BigNumber.from(0)

type ToDecimalParams = { amount: string; precision?: number }
export const toDecimals = ({ amount, precision = 5 }: ToDecimalParams) => {
  if (Number(amount) % 1 !== 0) {
    return parseFloat(amount).toPrecision(precision)
  }

  return amount
}

export const toEther = (value): BigNumber => ethers.utils.parseEther(`${value}`)

export const toWeiString = (value): string =>
  ethers.utils.formatUnits(value, 'wei')

export const toEtherString = (value, config: { decimals?: number, unit?: string } = {}): string => {
  const valueString = ethers.utils.formatUnits(value, config?.unit || 'ether')

  if (config?.decimals) {
    const nValueString = valueString.split('.')[0] || valueString;
    const n2ValueString = valueString.split('.')[1] || '';
    return `${nValueString}.${n2ValueString.substring(0, n2ValueString.length - (+n2ValueString.length - +config.decimals))}`
  }

  return valueString
}

export const toBigNumber = (value) => BigNumber.from(`${value}`)

export const bigNumberToDateString = (value: BigNumber): string => {
  return unixTimeToDateTime(toWeiString(value))
}

export const bigNumberToDays = (value: BigNumber): string => {
  return `${secondToDays(toEtherString(value))}`
}

export const bigNumberToPercentage = (value: BigNumber): string => {
  return `${+toEtherString(value) / 100}`
}

export const bigNumberSecondsToDays = (value: BigNumber): number => {
  return (+toWeiString(value)) / 86400;
}

export const bigNumberPercentageNormalized = (value: BigNumber): number => {
  return (+toWeiString(value)) / 100;
}