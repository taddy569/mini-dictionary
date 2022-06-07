import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  image: string[]
}

const initialState: Product[] = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    },
  },
})

export const { add } = productsSlice.actions

export default productsSlice.reducer
