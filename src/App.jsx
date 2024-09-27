import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import logo from './assets/logo.svg'
import logoFooter from './assets/logo-footer.svg'

import HomePage from './pages/Homepage.jsx'
import Accomodations from './pages/Accomodations.jsx'
import About from './pages/About.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import '../src/styles/App.scss'

const navLinks = [
  {href: '/', label: 'Accueil'},
  {href: 'about', label: 'A Propos'}
]

function App() {

  return (
    <div className='app'>
      <Header logo={logo} links={navLinks}/>
      <Routes>
        <Route path='/'  element={<HomePage />}/>
        <Route path='/accomodations/:id'  element={<Accomodations/>}/>
        <Route path='/about'  element={<About />}/>
        <Route path='*'  element={<ErrorPage />}/>
      </Routes>
      <Footer logo={logoFooter}/>
    </div>
    
  )
}

export default App
