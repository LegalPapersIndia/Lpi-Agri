import React from 'react'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <Mission />
        <WhyUs />
        <Testimonials />

    </div>
  )
}

export default Home