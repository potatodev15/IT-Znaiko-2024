import { useState } from 'react'
import Hero from './components/Hero'
import Boxes from './components/Boxes'
import Family from './components/Family'
import Symbol from './components/Symbol'
import Breed from './components/Breed'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Boxes />
      <Family />
      <Symbol />
      <Breed />
      <Footer />
    </div>
  )
}

export default App
