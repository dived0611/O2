import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbare from './components/Navbare';
import DiningEvents from './Sections/DinerEvent';
import OurStory from './Sections/OurStory';
function App() {

  return (
    <>
    <Navbare/>
     {/* <OurSpecialities/> */}
    {/* <DiningEvents/> */}
     <OurStory/>
    </>
  )
}

export default App
