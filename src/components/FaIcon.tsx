import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, SizeProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconName
  spin?: boolean
  size?: SizeProp
  className?: string
  fixedWidth?: boolean
}

export const FaIcon = ({ icon, spin, size, className, fixedWidth }: Props) => {
  return (
    <FontAwesomeIcon
      icon={['fal', icon]}
      spin={spin}
      size={size}
      className={className}
      fixedWidth={fixedWidth}
    />
  )
}
