import React from 'react'

import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'

import StyleWrapperOutlet from './style'

const WrapperOutlet: React.FunctionComponent = () => {
  return (
    <StyleWrapperOutlet>
      <Grid
        container
        style={{
          border: '3px green dotted',
        }}
      >
        <Outlet />
      </Grid>
    </StyleWrapperOutlet>
  )
}

export default WrapperOutlet
