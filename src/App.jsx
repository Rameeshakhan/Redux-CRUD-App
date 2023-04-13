import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import AddUser from './pages/AddUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>

    </div>
  )
}

export default App