import { PaginationQueryType } from 'types'

export const generateQueryParam = (
  subject: string,
  inputQuery: PaginationQueryType
) => {
  let builtQuery = `/${subject}?` // products, carts, users, etc

  if ('limit' in inputQuery) {
    builtQuery += 'limit=' + inputQuery.limit + '&'
  }
  if ('skip' in inputQuery) {
    builtQuery += 'skip=' + inputQuery.skip + '&'
  }
  if (inputQuery.select?.length) {
    builtQuery += 'select=' + inputQuery.select.join(',')
    return builtQuery
  }
  return builtQuery.slice(0, -1)
}
