import { createSlice } from '@reduxjs/toolkit'

export interface CategoryState {
  categoryId: number
}

const initialState: CategoryState = {
  categoryId: 0,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
  },
})

export const { setCategoryId } = categorySlice.actions

export default categorySlice.reducer
