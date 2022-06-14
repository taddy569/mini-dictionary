import React from 'react'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { Search } from 'components/base'

const NavBar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
