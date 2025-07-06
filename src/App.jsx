import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurSpecialities from './Sections/OurSpecialities';
import Navbare from './components/Navbare';
import DiningEvents from './Sections/DinerEvent';
import Hero from './Sections/Hero'
import Footer from './Sections/Footer'
import OurStory from './Sections/OurStory'
import TodaySpecial from './Sections/TodaySpecial';
import SmoothCursor from './components/SmoothCursor'
function App() {

  return (
    <>
    <SmoothCursor/>
    <Navbare/>
    <Hero/>
    <TodaySpecial/>
    <OurSpecialities/>
     <DiningEvents/>
     <OurStory/>
    <Footer/>
    </>
  )
}

export default App

