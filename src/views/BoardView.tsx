import React from 'react'
import {
  useCollectionData,
  useDocumentData,
} from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase'
import { Board as IBoard } from '../types/Board'
import { Card } from '../types/Card'
import { Column as IColumn } from '../types/Column'
import { Board } from '../components/Board'

interface Props {}

const BoardView = (props: Props) => {
  const { boardid } = useParams<{ boardid: string }>()

  const boardRef = firestore.collection('boards').doc(boardid)

  const [board, boardLoading, boardError] = useDocumentData<IBoard>(boardRef, {
    idField: 'id',
  })

  const [cards, cardsLoading, cardsError] = useCollectionData<Card>(
    boardRef.collection('cards'),
    { idField: 'id' }
  )

  const [columns, columnsLoading, columnsError] = useCollectionData<IColumn>(
    boardRef.collection('columns'),
    { idField: 'id' }
  )

  let view: JSX.Element
  if (boardLoading || cardsLoading || columnsLoading) {
    view = <div>Loading...</div>
  } else if (boardError || cardsError || columnsError) {
    view = <div>{boardError || cardsError || columnsError}</div>
  } else if (!board || !cards || !columns) {
    view = <div>Unknown Error Occurred</div>
  } else {
    view = <Board board={board} columns={columns} cards={cards} />
  }

  return <div>{view}</div>
}

export default BoardView
