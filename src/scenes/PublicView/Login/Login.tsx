import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import { useAppDispatch } from 'hooks'
import { Typography } from '@mui/material'

const Login = () => {
  const dispatch = useAppDispatch()

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        alignItem: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">Welcome to Mini Store!</Typography>
        <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            id="input-username"
            label="Email"
            type="email"
            variant="filled"
            fullWidth
            required
            autoFocus
            autoComplete="email@gmail.com"
          />
          <TextField
            margin="normal"
            id="input-password"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            required
            autoComplete="password"
          />
          <FormControlLabel label={'Remember me'} control={<Checkbox />} />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Grid item xs>
            <Link href="/auth/sign-up" variant="body2" underline="hover">
              Sign Up
            </Link>
          </Grid>
          <Grid item xs="auto">
            <Link
              href="/auth/forgot-password"
              variant="body2"
              underline="hover"
            >
              Forgot password
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Login
