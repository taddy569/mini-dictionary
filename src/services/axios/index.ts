import axios from 'axios'

import { STORE_URL } from 'appConstants'

export const axiosInstance = axios.create({
  baseURL: STORE_URL,
})
