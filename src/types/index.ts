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
