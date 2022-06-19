import React, { ChangeEvent } from 'react'

import WrapperPagination from './style'
import { useAppDispatch } from 'hooks'
import { fetchProducts } from 'redux/slices'

const PageNavigation: React.FunctionComponent<{
  count: number
  limit: number
  currentPage: number
  onChangeCurrentPage: (page: number) => void
}> = ({ count, limit, currentPage, onChangeCurrentPage }) => {
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<unknown>, page: number) => {
    onChangeCurrentPage(page)

    const skipItems = ((page - 1) * limit).toString()
    dispatch(fetchProducts({ limit, skip: skipItems }))
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
