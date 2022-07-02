import React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppRouter from 'routers'
import { store, persistedStore } from 'redux/store'
import { WrapperApp } from './App.style'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <WrapperApp>
          <AppRouter />
        </WrapperApp>
      </PersistGate>
    </Provider>
  )
}

export default App
