import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'
import Careers from './components/Careers'
import Network from './components/Network'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      {/* <TrustedBy /> */}
      <Services />
      <Careers />
      <Network />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  )
}

export default App