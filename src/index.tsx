import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'
import './fontawesome'

let root = document.createElement('div')
root.id = 'root'
let modal = document.createElement('div')
modal.id = 'modal-root'

document.body.append(root, modal)

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
)
