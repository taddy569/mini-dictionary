import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ErrorLayout, ProtectedLayout, PublicLayout } from 'layouts'
import { ProductList, ProductDetail } from 'scenes/Products'
import { Carts } from 'scenes/Carts'
import { ForgotPassword, Login, SignUp } from 'scenes/PublicView'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<Carts />} />
      </Route>
      <Route path="/auth" element={<PublicLayout />}>
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Route>
      <Route path="*" element={<ErrorLayout />} />
    </Routes>
  </Router>
)

export default AppRouter
