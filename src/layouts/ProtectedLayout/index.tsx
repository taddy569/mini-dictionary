import React from 'react'

import { NavBar } from 'components/composited'
import { WrapperOutlet } from 'components/base'

const ProtectedLayout: React.FC = () => (
  <>
    <NavBar />
    <WrapperOutlet wrapperStyle="mt-8" />
    {/* <footer /> */}
  </>
)

export default ProtectedLayout
