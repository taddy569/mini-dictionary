import React, { useState } from 'react'

import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import InventoryIcon from '@mui/icons-material/Inventory'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import GroupIcon from '@mui/icons-material/Group'
import Link from '@mui/material/Link'

const drawerChildrenListData = [
  {
    text: 'Products',
    link: '/products',
    icon: () => <InventoryIcon />,
  },
  {
    text: 'Orders History',
    link: '/carts',
    icon: () => <BookmarkBorderIcon />,
  },
  {
    text: 'Members',
    link: '/members',
    icon: () => <GroupIcon />,
  },
]

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setIsOpen(open)
    }

  const DrawerChildrenList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {drawerChildrenListData.map((data) => (
          <ListItem key={data.text} disablePadding>
            <Link
              href={data.link}
              sx={{
                textDecorationLine: 'none',
                color: 'inherit',
                width: '100%',
              }}
            >
              <ListItemButton>
                <ListItemIcon>{data.icon()}</ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
              <Divider />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <DrawerChildrenList />
      </Drawer>
    </>
  )
}

export default BurgerMenu
