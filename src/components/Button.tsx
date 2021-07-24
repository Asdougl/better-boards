import React, { FC } from 'react'

interface Props {
  onClick?: () => void
  disabled?: boolean
  submit?: boolean
  className?: string
}

export const Button: FC<Props> = ({
  children,
  onClick,
  disabled,
  submit,
  className = '',
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-royal-blue-light text-white rounded focus:outline-none focus:ring focus:ring-royal-blue-light focus:ring-opacity-25 ${className}`}
    >
      {children}
    </button>
  )
}
