import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useAppDispatch } from 'hooks'
import { requestLogin } from 'redux/slices'

type InputLogin = {
  username: string
  password: string
}

const Login = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit, // for validate inputs before passing data
    formState: { errors },
  } = useForm<InputLogin>({
    defaultValues: {
      username: 'kminchelle',
      password: '0lelplR',
    },
  })
  const onSubmit: SubmitHandler<InputLogin> = (data) => {
    dispatch(requestLogin(data))
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Welcome to Mini Store!
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            id="input-username"
            margin="normal"
            label="Username *"
            type="text"
            variant="filled"
            fullWidth
            autoFocus
            autoComplete=""
            {...register('username', { required: true })}
          />
          {errors.username && (
            <Typography mb={1} color="red">
              Username is required
            </Typography>
          )}

          <TextField
            id="input-password"
            margin="normal"
            label="Password *"
            type="password"
            variant="filled"
            fullWidth
            autoComplete="password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <Typography mb={1} color="red">
              Password is required
            </Typography>
          )}

          <FormControlLabel label={'Remember me'} control={<Checkbox />} />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>

        <Grid container>
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
