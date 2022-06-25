import React from 'react'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import { useAppDispatch, useAppSelector } from 'hooks'
import { StyledPaper } from './style'

const Carts = () => {
  const dispatch = useAppDispatch()
  const fakeData = useAppSelector((state) => state.products.pagination.data)

  return (
    <Grid container>
      <Grid container item xs>
        {fakeData.map((item, index) => (
          <StyledPaper key={index} elevation={2} sx={{ width: '100%' }}>
            <Grid
              key={index}
              item
              container
              sx={{ width: '100%' }}
              spacing={{
                xs: 1,
                sm: 1,
                md: 2,
              }}
            >
              <Grid
                container
                item
                xs={3}
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={item.thumbnail}
                  style={{
                    display: 'inline',
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </Grid>
              <Grid
                container
                item
                xs={9}
                justifyContent="center"
                alignItems="center"
                pl={2}
              >
                <Grid item xs={12} md={4}>
                  <Typography>{item.title}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography>{item.price}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography>{'1'}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography>{item.price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </StyledPaper>
        ))}
      </Grid>
      <Grid container item xs={12} sm={12} md={3}>
        Total
      </Grid>
    </Grid>
  )
}

export default Carts
