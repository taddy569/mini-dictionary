import React from 'react'

import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useAppDispatch, useAppSelector } from 'hooks'
import { fetchProducts } from 'redux/slices'
import { WrapperItemsPerPage } from './style'

const ItemsPerPage: React.FunctionComponent<{
  limit: number
  onChangeItemsPerPage: (currentPage: number) => void
}> = ({ limit, onChangeItemsPerPage }) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.token)

  const handleChange = (e: SelectChangeEvent) => {
    const parsedValue = Number.parseInt(e.target.value)
    onChangeItemsPerPage(parsedValue)

    dispatch(fetchProducts({ query: { limit: parsedValue }, token }))
  }

  return (
    <WrapperItemsPerPage>
      <label>Items per page:</label>
      <Select
        size="small"
        value={limit.toString()}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={17}>17</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={33}>33</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </WrapperItemsPerPage>
  )
}

export default ItemsPerPage
