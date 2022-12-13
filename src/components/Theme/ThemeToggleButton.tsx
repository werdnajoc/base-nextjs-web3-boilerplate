import React, { useState, useEffect } from 'react'

import { useTheme } from 'providers/theme'

import { Component } from './Component'

interface IProps {
  className?: string
  icon?: string
  small?: string
}

export const ThemeToggleButton: React.FC<IProps> = ({ className, icon, small }) => {
  const [mounted, setMounted] = useState(false)
  const { setDarkMode, darkMode } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <Component
      className={className}
      icon={icon}
      small={small}
      darkMode={darkMode}
      setDarkMode={() => setDarkMode({ darkMode: !darkMode })}
    />
  )
}
