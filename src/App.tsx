import React from 'react'

import { Provider } from 'react-redux'

import './App.css'
import AppRouter from 'routers'
import { store } from 'redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App

// https://dummyjson.com/docs/products
