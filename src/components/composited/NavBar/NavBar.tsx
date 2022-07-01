import React from 'react'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { NavLink } from 'react-router-dom'

import { Search } from 'components/base'
import { useAppDispatch } from 'hooks'
import { logOut } from 'redux/slices'
import { UserMenu } from './UserMenu'

const NavBar = () => {
  const dispatch = useAppDispatch()
  const handleSignOut = () => {
    dispatch(logOut())
  }
  return (
    <Box>
      <AppBar color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Mini Store
          </Typography>
          <Box sx={{ flexGrow: 2 }} />

          <Search />
          {/* <ShoppingCart /> */}

          <Box sx={{ flexGrow: 1 }} />
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLink
              to="/carts"
              style={{
                color: 'white',
              }}
            >
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </NavLink>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <NavLink
              to="/auth/login"
              style={{
                color: 'white',
              }}
            >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
              onClick={handleSignOut}
            >
              <AccountCircle />
            </IconButton>
            </NavLink>
          </Box> */}

          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
