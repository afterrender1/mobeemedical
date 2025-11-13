import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CareSection from './CareSection'
import OurServices from './OurService'
import { Weight } from 'lucide-react'
import WeightLoss from './WeightLoss'
import WeUnderstand from './WeUnderstand'
import Testimonials from './Testimonials'
import AcceptedInsure from './AcceptInsure'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CareSection/>
    <OurServices/>
    <WeightLoss/>
<WeUnderstand/>
<Testimonials/>
<AcceptedInsure/>
    </>
  )
}

export default Home