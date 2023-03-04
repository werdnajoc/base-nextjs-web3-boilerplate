import React from 'react'
import { Component } from './Component'

interface IProps {
  text: string
  className?: string
  onClick?: () => void
  icon?: any
  variant?: string
  isLoading?: boolean
  disabled?: boolean
}

const BaseButton: React.FC<IProps> = props => {
  return <Component {...props} />
}

export { BaseButton }
