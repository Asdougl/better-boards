import React from 'react'
import { Data } from 'react-firebase-hooks/firestore/dist/firestore/types'
import { Board as IBoard } from '../types/Board'
import { Card as ICard, ProtoCard } from '../types/Card'
import {
  Column as IColumn,
  ProtoColumn,
  toProto as toProtoColumn,
} from '../types/Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Column } from './Column'
import { firestore } from '../firebase'

interface Props {
  board: Data<IBoard, '', ''>
  columns: Data<IColumn, '', ''>[]
  cards: Data<ICard, '', ''>[]
}

export const Board = ({ board, columns, cards }: Props) => {
  const boardRef = firestore.collection('boards').doc(board.id)
  const columnsRef = boardRef.collection('columns')
  const cardsRef = boardRef.collection('cards')

  const addCard = (columnId: string, cardText: string) => {
    const column = columns.find((col) => col.id === columnId)
    if (column) {
      const newCard: ProtoCard = {
        flag: false,
        reactions: {},
        text: cardText,
      }

      cardsRef.add(newCard).then((value) => {
        const newCol: ProtoColumn = {
          ...toProtoColumn(column),
          cardIds: [...column.cardIds, value.id],
        }
        columnsRef.doc(columnId).update(newCol)
      })
    }
  }

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return
    }

    const startingCol = columns.find((col) => col.id === source.droppableId)
    const finishingCol = columns.find(
      (col) => col.id === destination.droppableId
    )

    if (!startingCol || !finishingCol) return

    if (startingCol === finishingCol) {
      // Sorting Column
      const newCardIds = [...startingCol.cardIds]
      newCardIds.splice(source.index, 1)
      newCardIds.splice(destination.index, 0, draggableId)

      const newColumn: ProtoColumn = {
        ...toProtoColumn(startingCol),
        cardIds: newCardIds,
      }

      columnsRef.doc(startingCol.id).update(newColumn)
      return
    }

    const startCardIds = [...startingCol.cardIds]
    startCardIds.splice(source.index, 1)
    const newStart: ProtoColumn = {
      ...toProtoColumn(startingCol),
      cardIds: startCardIds,
    }

    const finishCardIds = [...finishingCol.cardIds]
    finishCardIds.splice(destination.index, 0, draggableId)
    const newFinish: ProtoColumn = {
      ...toProtoColumn(finishingCol),
      cardIds: finishCardIds,
    }

    columnsRef.doc(startingCol.id).update(newStart)
    columnsRef.doc(finishingCol.id).update(newFinish)
  }

  return (
    <div>
      <div className="flex flex-col items-center py-6">
        <h2 className="text-xl">{board.title}</h2>
        <h3 className="text-3xl">{board.subtitle}</h3>
      </div>
      <div className="flex gap-2 p-2">
        <DragDropContext onDragEnd={onDragEnd}>
          {board.columnIds.map((colId) => {
            const column = columns.find((col) => col.id === colId)
            if (!column) return null
            const columnCards = column.cardIds
              .map((id) => cards.find((card) => card.id === id))
              .filter((card): card is Data<ICard, '', ''> => card !== undefined)

            return (
              <Column
                key={column.id}
                column={column}
                cards={columnCards}
                addCard={(text) => addCard(column.id, text)}
                boardId={board.id}
              />
            )
          })}
        </DragDropContext>
      </div>
    </div>
  )
}
