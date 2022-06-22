import { styled } from '@mui/material/styles'

import Container from '@mui/material/Container'

const WrapperOutlet = styled(Container)(() => ({
  position: 'relative',
  top: '64px',
  minHeight: 'calc(100vh - 64px)',
  // marginTop: '64px',
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // border: '5px red dotted',
}))

export default WrapperOutlet
