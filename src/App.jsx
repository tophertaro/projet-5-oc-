import { useState } from 'react'
import { Route } from 'react-router-dom'

import HomePage from './components/Home-page.jsx'
import Logements from './components/Logements.jsx'
import About from './components/A-propos.jsx'
import Error from './components/Erreur.jsx'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/'  element={<HomePage />}/>
      <Route path='/logements'  element={<Logements/>}/>
      <Route path='/about'  element={<About />}/>
      <Route path='/*'  element={<Error/>}/>
    </Routes>
  )
}

export default App
