import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import TwoPanelLayout from '../layout/TwoPanelLayout'
import { Link } from '../components/Link'
import { auth } from '../firebase'

interface Props {}

const SignUp = (props: Props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [pending, setPending] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPending(true)
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.user
          ?.updateProfile({ displayName: username })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
      .finally(() => setPending(false))
  }

  return (
    <TwoPanelLayout>
      <h1 className="text-2xl">Sign Up</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Input
          label="Username"
          value={username}
          onChange={setUsername}
          disabled={pending}
        />
        <Input
          label="Email"
          value={email}
          onChange={setEmail}
          disabled={pending}
        />
        <Input
          label="Password"
          value={password}
          onChange={setPassword}
          password
          disabled={pending}
        />
        <Button submit disabled={pending}>
          Sign Up
        </Button>
      </form>
      <Link to="/login">Login</Link>
    </TwoPanelLayout>
  )
}

export default SignUp
