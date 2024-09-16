import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home-page.jsx'
import Logements from './pages/Logements.jsx'
import About from './pages/A-propos.jsx'
import Error from './pages/Erreur.jsx'

import '../src/styles/App.css'


function App() {

  return (
    <Routes>
      <Route path='/'  element={<HomePage />}/>
      <Route path='/logements'  element={<Logements/>}/>
      <Route path='/about'  element={<About />}/>
      <Route path='*'  element={<Error/>}/>
    </Routes>
  )
}

export default App
