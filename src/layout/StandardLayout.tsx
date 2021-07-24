import React, { FC } from 'react'

interface Props {}

const StandardLayout: FC<Props> = ({ children }) => {
  return <div className="p-4">{children}</div>
}

export default StandardLayout
