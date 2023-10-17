import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../app/App.jsx'
import Nav from '../nav/nav.jsx'
import body from '../body/body.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
  </React.StrictMode>,
)
