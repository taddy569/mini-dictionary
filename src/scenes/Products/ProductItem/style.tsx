import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

export const CustomLink = styled(Link)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const CustomImage = styled('img')(() => ({
  display: 'inline',
  width: '8rem',
  height: '8rem',
  objectFit: 'cover',
}))
