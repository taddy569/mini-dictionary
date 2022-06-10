import React from 'react'

import { Link } from 'react-router-dom'

import { ProductType } from 'types'

const ProductItem: React.FunctionComponent<{ product: ProductType }> = ({
  product,
}) => {
  return (
    <Link to={`/products/${product.id}`}>
      <img
        className="inline object-scale-down w-32 h-32"
        src={product.thumbnail}
      />
      <p>{product.title}</p>
      <h3>{product.price}</h3>
    </Link>
  )
}

export default ProductItem
