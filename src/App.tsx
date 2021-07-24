import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { UserContext } from './context/UserContext'
import YourBoards from './views/YourBoards'
import Landing from './views/Landing'
import BoardView from './views/BoardView'
import Login from './views/Login'
import SignUp from './views/SignUp'
import ComponentTest from './views/ComponentTest'

const App = () => {
  const [authUser, loading] = useAuthState(auth)

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Router>
        <UserContext.Provider value={authUser}>
          <Switch>
            {/* Default Route */}

            <Route path="/" exact>
              {authUser ? <YourBoards user={authUser} /> : <Landing />}
            </Route>

            {/* Boards */}

            <Route path="/board/:boardid">
              <BoardView />
            </Route>

            {/* Authentication */}

            <Route path="/login">
              {authUser ? <Redirect to="/" /> : <Login />}
            </Route>

            <Route path="/register">
              {authUser ? <Redirect to="/" /> : <SignUp />}
            </Route>

            {/* Testing Routes */}

            <Route path="/test">
              <ComponentTest />
            </Route>

            {/* Catchall */}

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  )
}

export default hot(App)
