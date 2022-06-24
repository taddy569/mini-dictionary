import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { axiosInstance } from 'services/axios'

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
  quantity: number
}

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<UpdateCartType>) => {
      const newState = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          product.quantity += action.payload.quantity
        }
        return product
      })
      state.products = newState
    },
  },
})

export const { update } = cartsSlice.actions

export default cartsSlice.reducer
