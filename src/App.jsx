import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurSpecialities from './Sections/OurSpecialities';
import Navbare from './components/Navbare';
import DiningEvents from './Sections/DinerEvent';
import Hero from './Sections/Hero'
import Footer from './Sections/Footer'
function App() {

  return (
    <>
    <Navbare/>
    <Hero/>
     <OurSpecialities/>
     <DiningEvents/>
     <Footer />
    </>
  )
}

export default App
