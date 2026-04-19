import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import HomeGallerySlider from '../components/HomeGallerySlider'
import Careers from '../components/Careers'
import Network from '../components/Network'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HomeGallerySlider />
      <Careers />
      <Network />
      <ContactUs />
    </>
  )
}

export default Home
