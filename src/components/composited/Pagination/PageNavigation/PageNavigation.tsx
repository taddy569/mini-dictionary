import React, { ChangeEvent } from 'react'

import WrapperPagination from './style'
import { useAppDispatch, useAppSelector } from 'hooks'
import { fetchProducts } from 'redux/slices'

const PageNavigation: React.FunctionComponent<{
  count: number
  limit: number
  currentPage: number
  onChangeCurrentPage: (page: number) => void
}> = ({ count, limit, currentPage, onChangeCurrentPage }) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.token)

  const handleChange = (e: ChangeEvent<unknown>, page: number) => {
    onChangeCurrentPage(page)

    const skipItems = ((page - 1) * limit).toString()
    dispatch(fetchProducts({ query: { limit, skip: skipItems }, token }))
  }

  return (
    <WrapperPagination
      count={count}
      page={currentPage}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
    />
  )
}

export default PageNavigation
