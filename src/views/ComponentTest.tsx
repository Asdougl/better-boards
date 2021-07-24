import React, { useState } from 'react'
import { Reactions } from '../components/Reactions'
import { Reaction, ReactionMap } from '../types/Card'

interface Props {}

const ComponentTest = (props: Props) => {
  const [reactions, setReactions] = useState<ReactionMap>({
    thumb: [],
    haha: [],
    party: [],
  })

  const addReaction = (reaction: Reaction, id: string) => {
    const reactionsCopy: ReactionMap = { ...reactions }
    for (const list of Object.values(reactionsCopy)) {
      // if(list.includes(id))
    }
    const currReaction = reactions[reaction]
    setReactions({
      ...reactions,
      [reaction]: currReaction !== undefined ? [...currReaction, id] : [id],
    })
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="font-mono text-2xl py-4">Component Testing Grounds</h2>
      <div className="p-2">
        <h3>Data:</h3>
        <div className="font-mono">{JSON.stringify(reactions)}</div>
      </div>
      <div className="p-2 border border-gray-300 rounded h-96 flex items-center">
        <Reactions reactions={reactions} onReact={addReaction} />
      </div>
    </div>
  )
}

export default ComponentTest
