import React from 'react'

import { Outlet } from 'react-router-dom'

type WrapperOutletType = {
  wrapperStyle: string
}

const WrapperOutlet: React.FunctionComponent<WrapperOutletType> = (
  props: WrapperOutletType
) => {
  const { wrapperStyle } = props
  return (
    <div className={`${wrapperStyle}`}>
      <Outlet />
    </div>
  )
}

export default WrapperOutlet
