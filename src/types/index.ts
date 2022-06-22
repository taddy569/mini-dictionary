export type PaginationQueryType = {
  limit?: number
  skip?: string
  select?: string[]
}

export interface PaginationDataType<T> {
  limit: number
  skip: string
  total: number
  data: T[]
}

export interface ProductType {
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
  images: string[]
}
