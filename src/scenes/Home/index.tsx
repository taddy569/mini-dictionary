import React from 'react'

import { add } from 'redux/slices'
import { useAppDispatch, useAppSelector } from 'hooks/'

const exampleProduct = {
  id: 101,
  title: 'Example Product',
  description: 'Very simple example',
  price: 17.99,
  discountPercentage: 5,
  rating: 21,
  stock: 32,
  brand: 'Example',
  category: 'Sample Category',
  thumbnail: 'https://picsum.photos/64',
  image: ['images-1', 'images-2', 'images-3', 'images-4', 'images-5'],
}

const Home = () => {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  return (
    <>
      <div>Home</div>
      <button onClick={() => dispatch(add(exampleProduct))}>
        Test add new products
      </button>
      <div>
        {products.map((product, index) => (
          <p key={index}>{JSON.stringify(product)}</p>
        ))}
      </div>
    </>
  )
}

export default Home
