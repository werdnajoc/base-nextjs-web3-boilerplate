import React from 'react'
import Image from 'next/image'
import { Button } from 'react-bootstrap'

import styles from './styles.module.sass'

const Component: React.FC<any> = ({
  text,
  onClick = () => {},
  icon,
  className,
  isLoading,
  disabled,
  variant = 'primary',
}) => {
  return (
    <>
      <Button
        className={`${styles.container} ${className} ${isLoading && styles.disabled} ${disabled && styles.disabled}`}
        variant={variant}
        onClick={isLoading || disabled ? () => {} : onClick}
      >
        {isLoading && <Image src={'/gifs/loading-rolling.gi'} alt="button-loading" />}
        {!!icon && !isLoading && <Image src={icon} alt="button-icon" width={20} height={22} />}
        <span>{text}</span>
      </Button>
    </>
  )
}

export { Component }
