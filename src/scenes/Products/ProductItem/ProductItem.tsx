import React from 'react'

import Grid from '@mui/material/Grid'

import { ProductType } from 'types'
import { CustomLink, CustomImage } from './style'

const ProductItem: React.FunctionComponent<{
  product: ProductType
}> = ({ product }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <CustomLink to={`/products/${product.id}`}>
        <CustomImage src={product.thumbnail} />
        <p>{product.title}</p>
        <h3>{product.price}</h3>
      </CustomLink>
    </Grid>
  )
}

export default ProductItem
