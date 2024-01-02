import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dark from './components/Dark'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dark/> */}
    <Navbar/>
    <Hero/>
          </>
  )
}

export default App
