import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Navbar from '../Navbar'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Stats/>
    <OpenAccount/>
    <Footer/>
    </>
  )
}

export default HomePage