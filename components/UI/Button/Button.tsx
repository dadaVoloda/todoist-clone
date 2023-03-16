import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <button
      type='button'
      className={clsx(styles.button, className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
