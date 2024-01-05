import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextWrapper } from './context/globalContext'
import RoutesProvider from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
        <RoutesProvider />
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>,
)
