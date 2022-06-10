import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { axiosInstance } from 'services/axios'
import { generateQueryParam } from 'helpers'
import { PRODUCTS } from 'appConstants'
import { PaginationQueryType, PaginationDataType } from 'types'

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

const initialState: PaginationDataType<Product> = {
  limit: 0,
  skip: '0',
  total: 0,
  data: [],
}

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId: number) => {
    const response = await axiosInstance.get(`/products/${productId}`)
    return response.data
  }
)

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (query: PaginationQueryType) => {
    const builtQuery = generateQueryParam(PRODUCTS, query)
    const response = await axiosInstance.get(builtQuery)
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      // state.products.push(action.payload)
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      // state.products.concat(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.fulfilled, (state, action) => {
        // state.push(action.payload)
      })
      .addCase(fetchProductById.rejected, (state, action) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = state.data.concat(action.payload.products)
      })
  },
})

export const { add } = productsSlice.actions

export default productsSlice.reducer
