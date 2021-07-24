import classNames from 'classnames'
import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Card as ICard } from '../types/Card'
import { Column as IColumn } from '../types/Column'
import { Card } from './Card'
import { FaIcon } from './FaIcon'

const columnStyle = (style: string) => {
  switch (style) {
    case 'yellow':
      return 'border-[#f9c74f]'
    case 'blue':
      return 'border-[#577590]'
    case 'green':
      return 'border-[#90be6d]'
    default:
      return 'border-gray-400'
  }
}

interface Props {
  column: IColumn
  cards: ICard[]
  addCard: (text: string) => void
  boardId: string
}

export const Column = ({ column, cards, addCard, boardId }: Props) => {
  const [newCard, setNewCard] = useState('')

  const onAddCard = () => {
    if (newCard) {
      addCard(newCard)
      setNewCard('')
    }
  }

  const submitNewCard = (e: React.FormEvent) => {
    e.preventDefault()
    onAddCard()
  }

  const colStyle = columnStyle(column.style)

  return (
    <div
      className={classNames(
        'border-2 rounded w-64 px-4 py-2 flex flex-col gap-2 flex-1',
        colStyle
      )}
    >
      <h2
        className={classNames(
          'text-gray-600 font-bold border-b-2 h-20 py-2 flex items-center justify-center',
          colStyle
        )}
      >
        <span className="text-center">{column.title}</span>
      </h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="flex flex-col h-full min-h-[100px] transition-all"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} boardId={boardId} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <form
        onSubmit={submitNewCard}
        className="flex group rounded border border-gray-100 items-center focus-within:ring focus-within:ring-gray-200"
      >
        <input
          type="text"
          value={newCard}
          onChange={(e) => setNewCard(e.currentTarget.value)}
          className="flex-grow w-0 focus:outline-none rounded px-2"
        />
        <button
          className="group-focus:bg-gray-100 hover:bg-gray-200 rounded w-6 disabled:opacity-25"
          disabled={!newCard}
          onClick={onAddCard}
        >
          <FaIcon icon="plus" fixedWidth />
        </button>
      </form>
    </div>
  )
}
