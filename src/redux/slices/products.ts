import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { axiosInstance } from 'services/axios'
import { generateQueryParam } from 'helpers'
import { PRODUCTS } from 'appConstants'
import { PaginationQueryType, PaginationDataType, ProductType } from 'types'

const initialState: PaginationDataType<ProductType> = {
  limit: 10,
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
    add: (state, action: PayloadAction<ProductType>) => {
      // state.products.push(action.payload)
    },
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      // state.products.concat(action.payload)
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.limit = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.fulfilled, (state, action) => {
        // state.push(action.payload)
      })
      .addCase(fetchProductById.rejected, (state, action) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { products, limit, skip, total } = action.payload
        state.data = products
        // state.limit = limit
        state.skip = skip
        state.total = total
      })
  },
})

export const { add, setItemsPerPage } = productsSlice.actions

export default productsSlice.reducer
