import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import Auth from './pages/auth'
import DashBoard from './pages/DashBoard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App