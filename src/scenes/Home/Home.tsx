import React, { useEffect } from 'react'

import { add, fetchProductById, fetchProducts } from 'redux/slices'
import { useAppDispatch, useAppSelector } from 'hooks/'
import { EXAMPLE_PRODUCT, EXAMPLE_QUERY } from 'appConstants'

const Home = () => {
  const productsData = useAppSelector((state) => state.products.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts(EXAMPLE_QUERY))
  }, [])

  // return (
  //   <>
  //     <p>Home</p>
  //     <div className="flex w-full justify-center">
  //       <div className="flex-initial">
  //         <button onClick={() => dispatch(add(EXAMPLE_PRODUCT))}>
  //           Test add new products
  //         </button>
  //         <div>
  //           {products.map((product, index) => (
  //             <p key={index}>{JSON.stringify(product)}</p>
  //           ))}
  //         </div>
  //       </div>
  //       <div className="flex-initial">
  //         <button onClick={() => dispatch(fetchProductById(1))}>
  //           Test Thunk fetch product by id
  //         </button>
  //         <div>
  //           {products.map((product, index) => (
  //             <p key={index}>{JSON.stringify(product)}</p>
  //           ))}
  //         </div>
  //       </div>
  //       <div className="flex-initial">
  //         <button onClick={() => dispatch(fetchProducts(EXAMPLE_QUERY))}>
  //           Test Thunk fetch Many Products
  //         </button>
  //         <div>
  //           {products.map((product, index) => (
  //             <p key={index}>{JSON.stringify(product)}</p>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )

  if (!productsData.length) {
    return <>Loading...</>
  }

  return (
    <div className="grid gap-4 grid-cols-3">
      {productsData.map((product) => (
        <div key={product.id}>
          <img
            className="inline object-scale-down w-32 h-32"
            src={product.thumbnail}
          />
          <p>{product.title}</p>
          <h3>{product.price}</h3>
        </div>
      ))}
    </div>
  )
}

export default Home
