import React from 'react'
import { Component } from './Component'

interface IProps {
  handleClose?: () => void
  show?: boolean
  children?: React.ReactNode
  title?: string
  hideDefaultHeader?: boolean
  hideCloseButton?: boolean
  classNameTitle?: string
  size?: string
}

const BaseModal: React.FC<IProps> = props => {
  return <Component {...props} />
}

export { BaseModal }
