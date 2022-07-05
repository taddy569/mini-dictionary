import React, { useEffect } from 'react'

import { Link, NavLink, useParams } from 'react-router-dom'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { useAppDispatch, useAppSelector } from 'hooks'
import { fetchProductById } from 'redux/slices'
import {
  Wrapper,
  WrapperProductDetail,
  WrapperProductImages,
  StyledImage,
  WrapperProductInformation,
} from './style'

const ImagesArray: React.FunctionComponent<{ images: string[] }> = ({
  images,
}) => (
  <ImageList
    sx={{
      height: '64px',
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: '3px',
      paddingRight: '3px',
    }}
  >
    {images.map((image, index) => (
      <ImageListItem
        key={index}
        sx={{
          width: '64px',
          height: '64px',
          objectFit: 'cover',
          marginLeft: '6px',
          marginRight: '6px',
        }}
      >
        <img src={`${image}?w=64&h=64&fit=crop&auto=format`} />
      </ImageListItem>
    ))}
  </ImageList>
)

const ProductDetail: React.FunctionComponent = () => {
  const { id } = useParams()

  if (!id)
    return (
      <>
        Something wrong, please go <Link to="/">Home</Link>
      </>
    )

  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.token)
  const parsedIntId = Number.parseInt(id)

  useEffect(() => {
    dispatch(fetchProductById({ productId: parsedIntId, token }))
  }, [])

  const product = useAppSelector((state) => state.products.currentProduct)

  if (!product) {
    return <>There is no product like that...</>
  }

  const preDiscountPrice = Math.round(
    (product.price / (100 - product.discountPercentage)) * 100
  )
  const savePrice = preDiscountPrice - product.price

  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} sm={4} md={6}>
        <Grid
          xs={12}
          sx={{
            border: '1px gray dotted',
          }}
        >
          <StyledImage src={product.thumbnail} />
        </Grid>
        <Grid xs={12}>
          <ImagesArray images={product.images} />
        </Grid>
      </Grid>
      {/* <WrapperProductInformation> */}
      <Grid
        item
        container
        xs={12}
        sm={8}
        md={6}
        rowSpacing={2}
        alignItems="center"
      >
        <Grid item xs={12} alignItems="center">
          <Typography
            variant="h4"
            color="text.primary"
            sx={{
              fontWeight: '800',
            }}
          >
            {product.title}
          </Typography>
          <Grid
            item
            container
            xs={12}
            columns={{ xs: 12, sm: 10, md: 8, lg: 6, xl: 6 }}
            alignItems="center"
          >
            <Grid item xs="auto">
              <Rating value={product.rating} precision={0.1} readOnly />
            </Grid>
            <Grid item sx={{ paddingLeft: '10px' }}>
              <Typography variant="h6">{`${product.rating}/5`}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        <Grid
          item
          container
          alignItems="flex-end"
          alignSelf="flex-end"
          xs={12}
          columns={{ xs: 12, sm: 8, md: 6 }}
        >
          <Grid item xs={3} sm={2} md={1}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{
                fontWeight: 600,
                fontSize: '1.65em',
              }}
            >
              {`$${product.price}`}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                textDecorationLine: 'line-through',
                fontSize: '1em',
              }}
            >
              {`$${preDiscountPrice}`}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Typography variant="subtitle1">{`Now ${product.discountPercentage}% off`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color={'red'}>
              {`Save $${savePrice}`}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Quantity</Typography>
          <ButtonGroup>
            <Button>-</Button>
            <Button disabled>
              {/* <Typography variant="h6">{product.stock}</Typography> */}
              <Typography variant="h6">1</Typography>
            </Button>
            <Button>+</Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">{`Brand: ${product.brand}`}</Typography>
          <Typography variant="subtitle1">{`Category: ${product.category}`}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="error">
            <Typography sx={{ fontWeight: 500 }}>Add to Cart</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" color="text.secondary">
          Description
        </Typography>
        <Typography variant="subtitle1">{product.description}</Typography>
      </Grid>
    </Grid>
  )
}

export default ProductDetail
