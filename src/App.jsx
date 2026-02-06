import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Topbar } from './components/topbar'
import { Courses } from './pages/courses'
import { Home } from './pages/home'
import { Purchases } from './pages/purchases'
import { Profile } from './pages/profile'

function App() {

  return (
    <>
    
    <BrowserRouter >
    <Topbar/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Purchases" element={<Purchases/>} />
         <Route path="/Courses" element={<Courses/>} />
         <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}



export default App
