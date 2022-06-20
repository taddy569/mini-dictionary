import React, { useEffect } from 'react'

import { Link, NavLink, useParams } from 'react-router-dom'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'

import { useAppDispatch, useAppSelector } from 'hooks'
import { fetchProductById } from 'redux/slices'
import {
  Wrapper,
  WrapperProductDetail,
  WrapperProductImages,
  StyledImage,
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

  const product = useAppSelector((state) => state.products.currentProduct)

  if (!product) {
    return <>There is no product like that...</>
  }

  return (
    <Wrapper>
      <NavLink to="/products">
        <button>Back</button>
      </NavLink>
      <WrapperProductDetail>
        <WrapperProductImages>
          <StyledImage src={product.thumbnail} />
        </WrapperProductImages>
        {/* <WrapperProductInformation> */}
        <Container>
          <h1>{product.title}</h1>
          <Divider />
          <h3>{product.price}</h3>
          <h4>{product.discountPercentage}</h4>
          <p>{product.rating}</p>
          <p>{product.description}</p>
          <a>{product.stock}</a>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          {/* </WrapperProductInformation> */}
        </Container>
      </WrapperProductDetail>
    </Wrapper>
  )
}

export default ProductDetail
