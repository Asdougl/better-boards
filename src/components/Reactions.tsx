import React, { useRef } from 'react'
import { getMachineId } from '../helpers/machine'
import { Reaction, ReactionMap, ReactionOptions } from '../types/Card'
import { Twemoji } from './Twemoji'

interface Props {
  reactions: ReactionMap
  onReact: (reaction: Reaction, id: string) => void
}

/*
const reactionOptions: ReactionOptions = {
  thumb: '👍',
  haha: '🤣',
  sad: '😭',
  party: '🥳',
  love: '😍',
}
*/

const reactionOptions: ReactionOptions = [
  ['thumb', '👍'],
  ['haha', '🤣'],
  ['sad', '😭'],
  ['party', '🥳'],
  ['love', '😍'],
]

export const Reactions = ({ reactions, onReact }: Props) => {
  const machineId = useRef(getMachineId())

  const reactionArray = Object.entries(reactions)

  const totalCount = reactionArray.reduce(
    (prev, curr) => prev + curr[1].length,
    0
  )

  const topThree = reactionArray
    .sort((a, b) => {
      if (a[1].length > b[1].length) return -1
      if (a[1].length < b[1].length) return 1
      return 0
    })
    .slice(0, 3)
    .map((entry) => {
      const icon = entry[0]
      switch (icon) {
        case 'haha':
          return '🤣'
        case 'sad':
          return '😭'
        case 'party':
          return '🥳'
        case 'love':
          return '😍'
        default:
          return '👍'
      }
    })

  return (
    <div className="rounded-full bg-gray-200 flex gap-1 px-2 relative group">
      <button className="flex gap-2">
        <span className="flex items-center">
          {topThree.length ? (
            topThree.map((emoji) => (
              <Twemoji emoji={emoji} className="w-3 h-3" />
            ))
          ) : (
            <Twemoji className="w-3 h-3" emoji={'👍'} />
          )}
        </span>
        <span>{totalCount}</span>
      </button>
      <div className="absolute bottom-full left-0 pb-1 group-hover:opacity-100 opacity-0">
        <div className="bg-gray-300 rounded-full w-40 flex justify-between">
          {reactionOptions.map(([name, emoji]) => {
            const currentReactions = reactions[name]
            return (
              <button
                disabled={
                  currentReactions
                    ? currentReactions.includes(machineId.current)
                    : false
                }
                onClick={() => onReact(name, machineId.current)}
                className="hover:bg-gray-100/40 p-1 flex-1 rounded-full flex justify-center disabled:opacity-25"
              >
                <Twemoji emoji={emoji} />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
