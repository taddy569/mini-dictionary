import React from 'react'

import StyledInputBase from './style'

const InputBase = () => (
  <StyledInputBase
    placeholder="Search…"
    inputProps={{ 'aria-label': 'search' }}
  />
)

export default InputBase
