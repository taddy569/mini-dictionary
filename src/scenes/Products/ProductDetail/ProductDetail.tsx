import React from 'react'

import { Link, NavLink, useParams } from 'react-router-dom'

import { useAppSelector } from 'hooks'

const ProductDetail: React.FunctionComponent = () => {
  const { id } = useParams()

  if (!id)
    return (
      <>
        Something wrong, please go <Link to="/">Home</Link>
      </>
    )

  const product = useAppSelector((state) =>
    state.products.data.filter((product) => product.id.toString() === id)
  )

  if (product.length === 0) {
    return <>There is no product like that...</>
  }

  return (
    <>
      <NavLink to="/products">
        <button>Back</button>
      </NavLink>
      <div>
        <img
          className="inline object-scale-down w-32 h-32"
          src={product[0].thumbnail}
        />
        <p>{product[0].title}</p>
        <h3>{product[0].price}</h3>
      </div>
    </>
  )
}

export default ProductDetail
