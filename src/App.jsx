import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurSpecialities from './Sections/OurSpecialities';
import Navbare from './components/Navbare';
import DiningEvents from './Sections/DinerEvent';
function App() {

  return (
    <>
    <Navbare/>
     <OurSpecialities/>
     <DiningEvents/>
    </>
  )
}

export default App
