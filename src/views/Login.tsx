import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Link } from '../components/Link'
import { auth } from '../firebase'
import TwoPanelLayout from '../layout/TwoPanelLayout'

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPending(true)
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err))
      .finally(() => setPending(false))
  }

  return (
    <TwoPanelLayout>
      <h1 className="text-2xl">Login</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
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
        <Button submit disabled={pending}>Login</Button>
      </form>
      <Link to="/register">Sign Up</Link>
    </TwoPanelLayout>
  )
}

export default Login
