import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/NapoleonHero.png'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import Footer from './components/Footer'
import RiseSection from './sections/RiseSection'
import ZenithSection from './sections/ZenithSection'
import FallSection from './sections/FallSection'
import Section1798 from './sections/1798'
import Timeline from './components/Timeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title="Napoleon History" />
      <HeroSection title="Welcome to Napoleon History" description="Explore the life and legacy of Napoleon Bonaparte, one of history's most influential figures." imageUrl={heroImg} />
      <Timeline />
      <Footer />
    </>
  )
}

export default App
