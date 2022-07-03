import axios from 'axios'

import { STORE_URL, AUTH_STORE_URL } from 'appConstants'

export const axiosInstance = axios.create({
  baseURL: STORE_URL,
})

export const authAxiosInstance = (token: string) =>
  axios.create({
    baseURL: AUTH_STORE_URL,
    headers: { Authorization: 'Bearer ' + token },
  })
