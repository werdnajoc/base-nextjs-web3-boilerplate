import React from 'react'
import cn from 'classnames'

import Icon from 'components/Icon'

import styles from './styles.module.sass'

export const Component = ({ className, icon, small, darkMode, setDarkMode = () => {} }: any) => {
  return (
    <label className={cn(className, styles.theme, { [styles.small]: small })}>
      <input className={styles.input} checked={darkMode} onChange={setDarkMode} type="checkbox" />
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

export default Component
