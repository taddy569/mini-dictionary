import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit'
import { axiosInstance } from 'services/axios'
import products from './products'

interface ProductCartType {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
}

interface CartsDataType {
  products: ProductCartType[]
  total: number
  discountedTotal: number
  totalProducts: number
  totalQuantity: number
}

const initialState: CartsDataType = {
  products: [],
  total: 0,
  discountedTotal: 0,
  totalProducts: 0,
  totalQuantity: 0,
}

type UpdateCartType = {
  productId: number
  quantity?: number
}

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductCartType>) => {
      const newProduct = action.payload
      state.products.push(newProduct)
    },
    updateProductOnCart: (state, action: PayloadAction<UpdateCartType>) => {
      state.products = state.products.map((product) => {
        if (
          product.id === action.payload.productId &&
          action.payload.quantity
        ) {
          product.quantity += action.payload.quantity
        }
        return product
      })
    },
    increaseProductOnCart: (state, action: PayloadAction<UpdateCartType>) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          product.quantity += 1
        }
        return product
      })
    },
    decreaseProductOnCart: (state, action: PayloadAction<UpdateCartType>) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          product.quantity -= 1
        }
        return product
      })
    },
    removeProductFromCart: (state, action: PayloadAction<UpdateCartType>) => {
      state.products = state.products.filter(
        (product) => product.id === action.payload.productId
      )
    },
  },
})

export const {
  addProductToCart,
  updateProductOnCart,
  increaseProductOnCart,
  decreaseProductOnCart,
  removeProductFromCart,
} = cartsSlice.actions

export default cartsSlice.reducer
