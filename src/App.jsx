import React from 'react'
import './index.css'
import Navbar from './components/Headers/Navbar'
import Hero from './components/Sections/Hero'
import Product from './components/Sections/Product'
import AboutUs from './components/Sections/AboutUs'
import Reviews from './components/Sections/Reviews'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Product/>
    <AboutUs />
    <Reviews />
    <Footer />
    </>
  )
}
