import React from 'react'

import { NavBar } from 'components/composited'
import { WrapperOutlet } from 'components/base'

import RequireAuth from './RequireAuth'

const ProtectedLayout: React.FC = () => (
  <RequireAuth>
    <>
      <NavBar />
      <WrapperOutlet />
      {/* <footer /> */}
    </>
  </RequireAuth>
)

export default ProtectedLayout
