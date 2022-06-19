import React, { useEffect, useState } from 'react'

import { ItemsPerPage } from './ItemsPerPage'
import { PageNavigation } from './PageNavigation'
import { TotalItems } from './TotalItems'
import { WrapperPagination } from './style'
import { useAppSelector } from 'hooks'

const Pagination: React.FunctionComponent<{
  typeOfData: 'products'
}> = ({ typeOfData }) => {
  const productsData = useAppSelector((state) => state[typeOfData])
  const { total } = productsData

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const numberOfPages =
    total % itemsPerPage === 0
      ? total / itemsPerPage
      : Math.ceil(total / itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [itemsPerPage])

  return (
    <WrapperPagination>
      <TotalItems total={total} />
      <ItemsPerPage
        limit={itemsPerPage}
        onChangeItemsPerPage={setItemsPerPage}
      />
      <PageNavigation
        count={numberOfPages}
        limit={itemsPerPage}
        currentPage={currentPage}
        onChangeCurrentPage={setCurrentPage}
      />
    </WrapperPagination>
  )
}
export default Pagination
