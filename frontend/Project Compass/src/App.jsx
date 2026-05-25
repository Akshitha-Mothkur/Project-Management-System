import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import EditProject from './components/EditProject'
import AddProject from './components/AddProject'
function App() {

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
      <Dashboard/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/editproject/:id' Component={EditProject}/>
        <Route path='/addproject' Component={AddProject}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
