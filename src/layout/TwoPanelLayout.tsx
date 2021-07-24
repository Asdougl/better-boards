import React, { FC } from 'react'

interface Props {}

const TwoPanelLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid xl:grid-cols-2 h-full">
      <div className="bg-gray-600 items-center justify-center hidden xl:flex">
        BETTER BOARDS
      </div>
      <div className="p-8 h-full">{children}</div>
    </div>
  )
}

export default TwoPanelLayout
