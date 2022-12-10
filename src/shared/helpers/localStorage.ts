import * as logHelpers from './logs'

export const getItem = (name: string, forcedDefaultValue = {}): any => {
  try {
    if (!name) return forcedDefaultValue

    const item = localStorage.getItem(name)

    if (!item) return forcedDefaultValue

    return JSON.parse(item)
  } catch (error) {
    return forcedDefaultValue
  }
}

export const setItem = (name: string, item = {}): void => {
  try {
    localStorage.setItem(name, JSON.stringify(item))
  } catch (error) {
    logHelpers.log('setItem error', error)
  }
}

export const removeItem = (name: string): void => localStorage.removeItem(name)
