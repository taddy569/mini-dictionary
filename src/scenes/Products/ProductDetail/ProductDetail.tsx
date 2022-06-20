import React, { useEffect } from 'react'

import { Link, NavLink, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'hooks'
import { fetchProductById } from 'redux/slices'
import {
  Wrapper,
  WrapperProductDetail,
  WrapperProductImages,
  WrapperProductInformation,
} from './style'

const ProductDetail: React.FunctionComponent = () => {
  const { id } = useParams()

  if (!id)
    return (
      <>
        Something wrong, please go <Link to="/">Home</Link>
      </>
    )

  const dispatch = useAppDispatch()
  const parsedIntId = Number.parseInt(id)

  useEffect(() => {
    dispatch(fetchProductById(parsedIntId))
  }, [])

  const product = useAppSelector((state) =>
    state.products.data.filter((product) => product.id === parsedIntId)
  )

  if (product.length === 0) {
    return <>There is no product like that...</>
  }

  return (
    <Wrapper>
      <NavLink to="/products">
        <button>Back</button>
      </NavLink>
      <WrapperProductDetail>
        <WrapperProductImages>
          <img
            className="inline object-scale-down w-32 h-32"
            src={product[0].thumbnail}
          />
        </WrapperProductImages>
        <WrapperProductInformation>
          <p>{product[0].title}</p>
          <h3>{product[0].price}</h3>
          <p>{product[0].discountPercentage}</p>
          <p>{product[0].rating}</p>
          <p>{product[0].description}</p>
          <p>{product[0].stock}</p>
          <p>{product[0].brand}</p>
          <p>{product[0].category}</p>
        </WrapperProductInformation>
      </WrapperProductDetail>
    </Wrapper>
  )
}

export default ProductDetail
