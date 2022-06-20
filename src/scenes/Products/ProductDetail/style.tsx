import { styled } from '@mui/material/styles'
import { height } from '@mui/system'

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'red',
}))

export const WrapperProductDetail = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'purple',
  width: '100%',
}))

export const WrapperProductImages = styled('div')(() => ({
  border: '1px black dotted',
  backgroundColor: 'yellowgreen',
  width: '100%',
}))

export const StyledImage = styled('img')(() => ({
  height: 'auto',
  width: '100%',
  maxWidth: '100%',
}))

export const WrapperProductInformation = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignContent: 'center',
  backgroundColor: 'blue',
  width: '100%',
}))
