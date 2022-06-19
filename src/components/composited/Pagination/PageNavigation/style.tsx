import { styled } from '@mui/material/styles'

import Pagination from '@mui/material/Pagination'

const WrapperPagination = styled(Pagination)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '350px',
}))

export default WrapperPagination
