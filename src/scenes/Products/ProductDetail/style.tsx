import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const WrapperProductDetail = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const WrapperProductImages = styled('div')(() => ({
  border: '1px black dotted',
}))

export const WrapperProductInformation = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignContent: 'center',
}))
