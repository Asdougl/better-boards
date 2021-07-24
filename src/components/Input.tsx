import React, { useRef } from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  label?: string
  password?: boolean
}

const createid = () => Math.random().toString(36).substr(2, 7)

export const Input = ({
  value,
  onChange,
  disabled,
  label,
  password,
}: Props) => {
  const id = useRef(createid())

  return (
    <div className="flex flex-col">
      {label && (
        <label className="px-2 pb-2" htmlFor={id.current}>
          {label}
        </label>
      )}
      <input
        type={password ? 'password' : 'text'}
        id={id.current}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        disabled={disabled}
        className="rounded border px-4 py-2 focus:outline-none focus:ring focus:ring-royal-blue-light focus:ring-opacity-25"
      />
    </div>
  )
}
