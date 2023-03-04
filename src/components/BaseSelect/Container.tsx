import React from 'react'
import { Component } from './Component'

interface IOptions {
  value: any
  label: any
  keyId: string
}

interface IProps {
  options: IOptions[]
  onChange: (element: any) => void
  defaultValue?: string
  ariaLabel?: string
  size?: string
  isValid?: boolean
  disabled?: boolean
}

const BaseSelect: React.FC<IProps> = props => {
  return <Component {...props} />
}

export { BaseSelect }
