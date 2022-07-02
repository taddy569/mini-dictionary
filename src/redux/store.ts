import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { productsReducer, cartsReducer, authReducer } from './slices'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  auth: authReducer,
})

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
