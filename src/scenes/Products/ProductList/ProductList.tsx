import React, { useEffect } from 'react'

import { add, fetchProductById, fetchProducts } from 'redux/slices'
import { useAppDispatch, useAppSelector } from 'hooks/'
import { EXAMPLE_PRODUCT, EXAMPLE_QUERY } from 'appConstants'
import { ProductType } from 'types'
import { ProductItem } from '../ProductItem'

const ProductList: React.FunctionComponent = () => {
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
    <div className="container mx-auto grid gap-1 grid-cols-4">
      {productsData.map((product: ProductType) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
