import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'
import './home.scss'

export const Home = () => {
  return (
    <div className='home-container'>
      <header>
        <h1>Welcome to our Online Store</h1>
        <p>Discover our featured products and find the perfect items for you.</p>
      </header>
      <main>
      <div className='feaPro'>
        <h2>Featured Products</h2>
        </div>
        <FeaturedProducts/></main>
      <footer>
        <p className='copy'>©</p>
        <p className='text'>2023 Our Online Store. All rights reserved.</p>
        </footer>
    </div>
  )
}

