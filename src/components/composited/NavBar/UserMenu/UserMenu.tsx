import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'

import { useAppDispatch, useAppSelector } from 'hooks'
import { logOut } from 'redux/slices'

const settings = [
  { label: 'Profile', value: 'profile' },
  { label: 'Setting', value: 'setting' },
]

const UserMenu = () => {
  const dispatch = useAppDispatch()
  const userName = useAppSelector((state) => state.auth.username)
  const userImage = useAppSelector((state) => state.auth.image)

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            sx={{ border: '1px dotted black' }}
            alt={userName}
            src={userImage}
            variant="rounded"
          />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <Link
            key={setting.value}
            color="inherit"
            sx={{ textDecorationLine: 'none' }}
            href={`${setting.value}`}
          >
            <MenuItem>
              <Typography textAlign="center">{setting.label}</Typography>
            </MenuItem>
          </Link>
        ))}

        <Divider />
        <MenuItem onClick={handleLogOut}>
          <Typography textAlign="center">Log Out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default UserMenu
