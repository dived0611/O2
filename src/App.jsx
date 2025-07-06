import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Sections/Hero'
import Footer from './Sections/Footer'
import Navbar from './Sections/navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer />
    </div>
  )
}

export default App
