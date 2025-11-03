import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import Auth from './pages/auth'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App