import { useContext } from 'react'
import { ThemeContext } from './Provider'

const useTheme = () => {
  const themeContext = useContext(ThemeContext)

  if (themeContext === undefined) {
    throw new Error('Theme context is undefined')
  }

  return themeContext
}

export default useTheme
