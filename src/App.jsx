import React from 'react'
import Home from './pages/Home'
import Login from "./pages/Login"
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
      </Routes>
     
    </div>
  )
}

export default App
