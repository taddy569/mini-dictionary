import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ErrorLayout, ProtectedLayout, PublicLayout } from 'layouts'
import { Home } from 'scenes'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/public" element={<PublicLayout />}>
        <Route path="login" element={<PublicLayout />} />
      </Route>
      <Route path="*" element={<ErrorLayout />} />
    </Routes>
  </Router>
)

export default AppRouter
