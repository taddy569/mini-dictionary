import React from 'react'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { Search, ShoppingCart } from 'components/base'

const NavBar = () => {
  return (
    <Box>
      <AppBar color="primary">
        <Toolbar>
          <Search />
          <ShoppingCart />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
