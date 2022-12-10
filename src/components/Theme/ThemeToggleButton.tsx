import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import Icon from 'components/Icon'
import { useTheme } from 'providers/theme'

import styles from './styles.module.sass'

export const ThemeToggleButton = ({ className, icon, small }: any) => {
  const [mounted, setMounted] = useState(false)
  const { setDarkMode, darkMode } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <label className={cn(className, styles.theme, { [styles.small]: small })}>
      <input
        className={styles.input}
        checked={darkMode}
        onChange={() => setDarkMode({ darkMode: !darkMode })}
        type="checkbox"
      />
      {icon ? (
        <div className={styles.icon}>
          <Icon name="theme-light" size={24} />
          <Icon name="theme-dark" size={24} />
        </div>
      ) : (
        <span className={styles.inner}>
          <span className={styles.box} />
        </span>
      )}
    </label>
  )
}
