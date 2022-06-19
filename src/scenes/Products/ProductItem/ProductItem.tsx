import React from 'react'

import Grid from '@mui/material/Grid'

import { ProductType } from 'types'
import { CustomLink, CustomImage } from './style'

const ProductItem: React.FunctionComponent<{
  key: number
  product: ProductType
}> = ({ key, product }) => {
  return (
    <Grid item xs={2} sm={4} md={4} key={key}>
      <CustomLink
        to={`/products/${product.id}`}
        className="flex flex-col justify-center items-center "
      >
        <CustomImage src={product.thumbnail} />
        <p>{product.title}</p>
        <h3>{product.price}</h3>
      </CustomLink>
    </Grid>
  )
}

export default ProductItem
