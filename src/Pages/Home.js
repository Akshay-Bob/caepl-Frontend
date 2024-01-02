import React from 'react'
import HomeSlider from '../Components/Homeslide/HomeSlider'
import AboutUs from './AboutUs'
import Product from '../Components/ProductSec/Product'

export default function Home() {
  return (
    <div  style={{backgroundColor: '#ada298'}}>
        <HomeSlider/>
        <Product />
        <AboutUs/>
    </div>
  )
}
