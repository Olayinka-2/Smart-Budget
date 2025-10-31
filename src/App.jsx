import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  )
}

export default App