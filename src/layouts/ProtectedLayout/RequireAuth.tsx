import React from 'react'

import { useLocation, Navigate } from 'react-router-dom'

import { useAppSelector } from 'hooks'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const authToken = useAppSelector((state) => state.auth.token)
  const location = useLocation()

  if (!authToken) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
