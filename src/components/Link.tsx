import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
  to: string
}

export const Link: FC<Props> = ({ children, to }) => {
  return (
    <RouterLink
      to={to}
      className="text-royal-blue-light hover:bg-royal-blue-light hover:bg-opacity-20 px-2 py-1"
    >
      {children}
    </RouterLink>
  )
}
