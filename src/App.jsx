import React from 'react'
import Home from './pages/Home'
import Login from "./pages/Login"
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <LandingPage/>}/>
        <Route path="/home" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        
      </Routes>
     
    </div>
  )
}

export default App
