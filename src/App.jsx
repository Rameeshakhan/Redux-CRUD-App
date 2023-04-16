import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>

    </div>
  )
}

export default App