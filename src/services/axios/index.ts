import axios from 'axios'

import { storeUrl } from 'appConstants'

export const axiosInstance = axios.create({
  baseURL: storeUrl,
})
