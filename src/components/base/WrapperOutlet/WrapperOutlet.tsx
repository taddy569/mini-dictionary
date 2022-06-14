import React from 'react'

import { Outlet } from 'react-router-dom'

import StyleWrapperOutlet from './style'

const WrapperOutlet: React.FunctionComponent = () => {
  return (
    <StyleWrapperOutlet>
      <Outlet />
    </StyleWrapperOutlet>
  )
}

export default WrapperOutlet
