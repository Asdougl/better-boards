import classNames from 'classnames'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { firestore } from '../firebase'
import { Card as ICard, ProtoCard, Reaction, toProtoCard } from '../types/Card'
import { FaIcon } from './FaIcon'
import { Reactions } from './Reactions'

interface Props {
  card: ICard
  index: number
  boardId: string
}

export const Card = ({ card, index, boardId }: Props) => {
  const cardRef = firestore
    .collection('boards')
    .doc(boardId)
    .collection('cards')
    .doc(card.id)

  const flag = (status: boolean) => {
    updateCard({ ...card, flag: status })
  }

  const addReaction = (reaction: Reaction, id: string) => {
    const currReaction = card.reactions[reaction]
    updateCard({
      ...card,
      reactions: {
        ...card.reactions,
        [reaction]: currReaction !== undefined ? [...currReaction, id] : [id],
      },
    })
  }

  const updateCard = (newCardData: ICard) => {
    cardRef.update(toProtoCard(newCardData))
  }

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className={classNames(
            'border bg-gray-100 rounded p-2 flex flex-col gap-2 mb-2',
            card.flag ? 'border-princeton-orange' : 'border-gray-200'
          )}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex-grow">{card.text}</div>
          <div className="flex justify-between text-sm">
            {/* actions */}
            <Reactions reactions={card.reactions} onReact={addReaction} />
            <div>
              <button onClick={() => flag(!card.flag)}>
                <FaIcon
                  className={card.flag ? 'text-princeton-orange' : 'text-black'}
                  icon="flag"
                  fixedWidth
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}
