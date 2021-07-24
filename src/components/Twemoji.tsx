import React from 'react'

interface Props {
  emoji: string
  className?: string
}

export const Twemoji = ({ emoji, className }: Props) => {
  const code = emoji.codePointAt(0)?.toString(16)
  return (
    <img
      src={`https://twemoji.maxcdn.com/v/13.1.0/svg/${code}.svg`}
      alt={emoji}
      className={className || 'h-4 w-4'}
    />
  )
}
