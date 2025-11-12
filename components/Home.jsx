import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CareSection from './CareSection'
import OurServices from './OurService'
import { Weight } from 'lucide-react'
import WeightLoss from './WeightLoss'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CareSection/>
    <OurServices/>
    <WeightLoss/>
    <OurServices/>

    </>
  )
}

export default Home