
import React from 'react'
import Hero from '../Components/Hero'
import Feautures from '../Components/Feautures'
import CTA from '../Components/CTA'
import Trust from '../Components/Trust'
import NewLetter from '../Components/NewsLetter'
import Testimonials from '../Components/Testimonials'

export default function Home() {
  return (
    <div>
       <Hero/>
       <Feautures/>
       <CTA/>
       <Trust/>
       <Testimonials/>
       <NewLetter/>
    </div>
  )
}
