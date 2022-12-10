import React, { createContext, useCallback, useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

export type ContextData = {
  [key: string]: string | number
}

export interface ProviderState {
  darkMode: boolean
}

export interface ContextApi extends ProviderState {
  setDarkMode: ({ darkMode }: { darkMode: boolean }) => void
}

const initialState: ProviderState = {
  darkMode: true,
}

export const ThemeContext = createContext<ContextApi | undefined>(undefined)

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const _darkModeData = useDarkMode(true)
  const [state, setState] = useState<ProviderState>(() => {
    return {
      ...initialState,
      darkMode: _darkModeData.value,
    }
  })

  const setDarkMode = useCallback(
    ({ darkMode }: { darkMode: boolean }): void => {
      setState({ darkMode })
      _darkModeData.toggle()
    },
    [_darkModeData]
  )

  return <ThemeContext.Provider value={{ ...state, setDarkMode }}>{children}</ThemeContext.Provider>
}
