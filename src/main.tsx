import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter } from 'react-router-dom'
import UserState from './context/userContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserState>
        <App />
        <Toaster />
      </UserState>
    </BrowserRouter>
  </React.StrictMode>,
)
