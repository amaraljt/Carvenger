// How to make JS bundle for browser events:
// Option 1: 'use client'; Tells next.js compiler to include this file and parent files to JS bundle
// Option 2: Move button to the client
import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <div>
        <AddToCart />
    </div>
  )
}

export default ProductCard