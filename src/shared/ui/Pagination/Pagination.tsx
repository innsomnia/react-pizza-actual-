// import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface BasicPaginationProps {
  countOfPizzas: number
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void
  page: number
}

export const BasicPagination = ({ countOfPizzas, handleChangePage, page }: BasicPaginationProps) => {
  return (
    <Stack spacing={2}>
      <Pagination count={countOfPizzas} page={page} onChange={handleChangePage} color='primary' />
    </Stack>
  )
}
