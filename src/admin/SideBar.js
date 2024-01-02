import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <>
            <center>
                <ul className="ps-2 text-start">
                    <li className="nav-link text-white pb-4">
                        <Link to={'/admin'} className='text-light text-decoration-none'>Admin Panel</Link>
                    </li>
                    <li className="pb-2 nav-link fs-6">
                        <Link to={'/admin/product'} className='text-light text-decoration-none'>All Products</Link>
                    </li>
                    <li className="pb-2 nav-link fs-6">
                        <Link to={'/admin/banner-images'} className='text-light text-decoration-none'>All Banner Images</Link>
                    </li>
                </ul>
            </center>
        </>
    )
}
