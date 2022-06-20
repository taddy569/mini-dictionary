import React from 'react'

import { Provider } from 'react-redux'

import AppRouter from 'routers'
import { store } from 'redux/store'
import { WrapperApp } from './App.style'

function App() {
  return (
    <Provider store={store}>
      <WrapperApp>
        <AppRouter />
      </WrapperApp>
    </Provider>
  )
}

export default App

// https://dummyjson.com/docs/products
