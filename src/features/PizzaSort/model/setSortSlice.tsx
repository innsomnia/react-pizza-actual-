import { createSlice } from '@reduxjs/toolkit'

export interface SortSlice {
  sortId: number
  sortListNames: string[]
  sortListProperties: string[]
}

export const initialState: SortSlice = {
  sortId: 0,
  sortListNames: ['популярности', 'цене', 'алфавиту'],
  sortListProperties: ['rating', 'price', 'title'],
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action) {
      state.sortId = action.payload
    },
    setListProperties(state, action) {
      state.sortListProperties = action.payload
    },
    setListNames(state, action) {
      state.sortListNames = action.payload
    },
  },
})

export const { setSort } = sortSlice.actions

export default sortSlice.reducer
