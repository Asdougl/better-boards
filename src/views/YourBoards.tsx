import React from 'react'
import firebase from 'firebase/app'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { Board } from '../types/Board'
import { firestore } from '../firebase'
import { Link } from 'react-router-dom'

interface Props {
  user: firebase.User
}

const YourBoards = ({ user }: Props) => {
  const [boards, loading, error] = useCollectionDataOnce<Board>(
    firestore.collection('boards').where('owner', '==', user.uid),
    { idField: 'id' }
  )

  return (
    <div className="container mx-auto">
      <h2 className="pt-24 pb-12 text-4xl font-bold">
        Welcome {user.displayName}
      </h2>
      <div className="">
        {!loading ? (
          <div>
            {boards?.map((board) => (
              <Link
                key={board.id}
                to={`/board/${board.id}`}
                className="px-4 py-2 border-2 border-princeton-orange rounded hover:bg-princeton-orange/20"
              >
                {board.title} - {board.subtitle}
              </Link>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default YourBoards
