import React from 'react'
import Products from './Products'
import { Button } from 'primereact/button';
        

export default function Dashbord() {
  return (
  <div className='container py-5'>
    <div className='row'>
      <div className='col-md-12'>
        <h4>CAEPL Dashbord</h4>
        <a href={'/#/admin/add-product-details'} className="navigator p-button font-bold mb-3 me-3"> Add Products Details</a>
        <a href={'/#/admin/add-product-images'} className="navigator p-button font-bold mb-3"> Add Products Image</a>
        <a href={'/#/admin/productsShows'} className="navigator p-button font-bold mb-3">Show Products</a>
        <Products/>
      </div>
    </div>
  </div>
  )
}
