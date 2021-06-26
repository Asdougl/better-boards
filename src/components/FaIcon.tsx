import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, SizeProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconName
  spin?: boolean
  size?: SizeProp
  className?: string
}

export const FaIcon = ({ icon, spin, size, className }: Props) => {
  return (
    <FontAwesomeIcon
      icon={['fal', icon]}
      spin={spin}
      size={size}
      className={className}
    />
  )
}
