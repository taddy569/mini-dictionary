import React from 'react'

import { add } from 'redux/slices'
import { useAppDispatch, useAppSelector } from 'hooks/'
import { exampleProduct } from 'appConstants'

const Home = () => {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  return (
    <>
      <p>Home</p>
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
