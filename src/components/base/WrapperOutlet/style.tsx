import { styled } from '@mui/material/styles'

const WrapperOutlet = styled('div')(() => ({
  position: 'relative',
  top: '64px',
  minHeight: 'calc(100vh - 64px)',
  // marginTop: '64px',
  marginLeft: 'auto',
  marginRight: 'auto',
  // backgroundColor: '',
}))

export default WrapperOutlet
