import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import logo from './assets/logo.svg'
import logoFooter from './assets/logo-footer.svg'

import HomePage from './pages/Homepage.jsx'
import Accomodations from './pages/Accomodations.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import '../src/styles/App.scss'

const navLinks = [
  {href: '/', label: 'Accueil'},
  {href: 'about', label: 'A Propos'}
]

function App() {

  return (
    <>
      <Header logo={logo} links={navLinks}/>
      <Routes>
        <Route path='/'  element={<HomePage />}/>
        <Route path='/accomodations'  element={<Accomodations/>}/>
        <Route path='/about'  element={<About />}/>
        <Route path='*'  element={<Error/>}/>
      </Routes>
      <Footer logo={logoFooter}/>
    </>
    
  )
}

export default App
