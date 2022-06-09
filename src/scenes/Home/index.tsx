import React from 'react'

import { add, fetchProductById } from 'redux/slices'
import { useAppDispatch, useAppSelector } from 'hooks/'
import { exampleProduct } from 'appConstants'

const Home = () => {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  return (
    <>
      <p>Home</p>
      <div className="flex w-full justify-center">
        <div className="flex-initial">
          <button onClick={() => dispatch(add(exampleProduct))}>
            Test add new products
          </button>
          <div>
            {products.map((product, index) => (
              <p key={index}>{JSON.stringify(product)}</p>
            ))}
          </div>
        </div>
        <div className="flex-initial">
          <button onClick={() => dispatch(fetchProductById(1))}>
            Test Thunk fetch product by id
          </button>
          <div>
            {products.map((product, index) => (
              <p key={index}>{JSON.stringify(product)}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
