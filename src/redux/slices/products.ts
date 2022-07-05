import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { axiosInstance, authAxiosInstance } from 'services/axios'
import { generateQueryParam } from 'helpers'
import { PRODUCTS, EXAMPLE_PRODUCT } from 'appConstants'
import {
  AuthPaginationQueryType,
  PaginationQueryType,
  PaginationDataType,
  ProductType,
} from 'types'

interface ProductsDataType {
  pagination: PaginationDataType<ProductType>
  currentProduct: ProductType
}

const initialState: ProductsDataType = {
  pagination: {
    limit: 10,
    skip: '0',
    total: 0,
    data: [],
  },
  currentProduct: EXAMPLE_PRODUCT,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (input: AuthPaginationQueryType) => {
    const builtQuery = generateQueryParam(PRODUCTS, input.query)
    const response = await authAxiosInstance(input.token).get(builtQuery)
    return response.data
  }
)

type GetOneProductType = {
  productId: number
  token: string
}

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (input: GetOneProductType) => {
    const response = await authAxiosInstance(input.token).get(
      `/products/${input.productId}`
    )
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
      state.pagination.limit = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.fulfilled, (state, action) => {
        // state.push(action.payload)

        // const updateData = state.pagination.data.map((item) => {
        //   if (item.id === action.payload.id) {
        //     item = action.payload
        //   }
        //   return item
        // })
        // state.pagination.data = updateData

        state.currentProduct = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { products, limit, skip, total } = action.payload
        state.pagination.data = products
        state.pagination.skip = skip
        state.pagination.total = total
      })
  },
})

export const { add, setItemsPerPage } = productsSlice.actions

export default productsSlice.reducer
