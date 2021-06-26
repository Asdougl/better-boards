import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="w-full flex justify-center">
            <h1 className="text-2xl">Hello World</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(App)
