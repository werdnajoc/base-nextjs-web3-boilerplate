import React from 'react'
import Form from 'react-bootstrap/Form'

import styles from './styles.module.sass'

const Component: React.FC<any> = ({
  options = [],
  onChange = () => {},
  defaultValue,
  ariaLabel,
  size = 'lg',
  isValid,
  disabled,
}) => {
  let extraProps = {}

  if (ariaLabel) extraProps = { ...extraProps, ['aria-label']: ariaLabel }

  return (
    <Form.Select {...extraProps} onChange={onChange} size={size} isValid={isValid} disabled={disabled}>
      {defaultValue && <option>{defaultValue}</option>}
      {options.map((row, index) => (
        <option key={`${row.keyId}-${index}`} value={row.value}>
          {row.label}
        </option>
      ))}
    </Form.Select>
  )
}

export { Component }
