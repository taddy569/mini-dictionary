import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { axiosInstance } from 'services/axios'

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

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId: number) => {
    const response = await axiosInstance.get(`/products/${productId}`)
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.fulfilled, (state, action) => {
        // state.push(action.payload)
      })
      .addCase(fetchProductById.rejected, (state, action) => {})
  },
})

export const { add } = productsSlice.actions

export default productsSlice.reducer
