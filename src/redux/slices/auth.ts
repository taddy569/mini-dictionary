import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { axiosInstance } from 'services/axios'

type LoginDataType = {
  username: string
  password: string
}

const initialState = {
  id: 0,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  image: '',
  token: '',
}

export const requestLogin = createAsyncThunk(
  'auth/login',
  async (loginData: LoginDataType) => {
    const response = await axiosInstance.post('/auth/login', loginData)
    return response.data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestLogin.rejected, (state, action) => {
        console.log('Auth failed!')
      })
      .addCase(requestLogin.fulfilled, (state, action) => {
        // https://stackoverflow.com/questions/70524973/createslices-extrareducer-action-not-updating-the-state
        return action.payload
      })
  },
})

export const {} = authSlice.actions

export default authSlice.reducer
