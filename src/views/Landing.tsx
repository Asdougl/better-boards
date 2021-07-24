import React from 'react'
import StandardLayout from '../layout/StandardLayout'
import { Link } from 'react-router-dom'

interface Props {}

const Landing = (props: Props) => {
  return (
    <StandardLayout>
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-2xl">Welcome to Better Boards</h1>
        <div className="flex flex-col items-center">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </StandardLayout>
  )
}

export default Landing
