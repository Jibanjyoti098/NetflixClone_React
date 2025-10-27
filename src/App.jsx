import React, { useEffect } from 'react'
import Home from './pages/Home'
import Login from "./pages/Login"
import { Routes, Route, useNavigate } from 'react-router-dom'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import Player from './pages/Player'
import { Toaster } from 'react-hot-toast'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
const App = () => {
  // !Login logic 
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user)=>{
      if (user){
        navigate("/home")
      }else{
        navigate("/login")
      }
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={ <LandingPage/>}/>
        <Route path="/home" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/player/:id" element={<Player/>}/>
        
      </Routes>
     <Toaster/>
    </div>
  )
}

export default App
