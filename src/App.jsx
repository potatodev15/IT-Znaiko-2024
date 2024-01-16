import { useState } from 'react'
import Hero from './components/Hero'
import Boxes from './components/Boxes'
import Family from './components/Family'
import Symbol from './components/Symbol'
import Breed from './components/Breed'

function App() {
  return (
    <div>
      <Hero />
      <Boxes />
      <Family />
      <Symbol />
      <Breed />
    </div>
  )
}

export default App
