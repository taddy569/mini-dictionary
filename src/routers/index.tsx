import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ErrorLayout, ProtectedLayout, PublicLayout } from 'layouts'
import { ProductList, ProductDetail } from 'scenes/Products'
import { Carts } from 'scenes/Carts'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<Carts />} />
      </Route>
      <Route path="/public" element={<PublicLayout />}>
        <Route path="login" element={<PublicLayout />} />
      </Route>
      <Route path="*" element={<ErrorLayout />} />
    </Routes>
  </Router>
)

export default AppRouter
