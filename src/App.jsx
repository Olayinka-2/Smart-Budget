import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import Auth from './pages/auth'
import DashBoard from './pages/DashBoard'
import Savings from './pages/Savings'
import Alert from './pages/Alert'
import Settings from './pages/Settings'
import TransactionHistory from './pages/TransactionHistory'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/savings' element={<Savings />} />
        <Route path='/alert' element={<Alert />} />
        <Route path='/setting' element={<Settings />} />
        <Route path='/trHistory' element={<TransactionHistory />} />
      </Routes>
    </div>
  )
}

export default App