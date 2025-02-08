import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../../features/CounterSlice/CounterSlice'
import categorySlice from '../../features/Categories/model/SetCategorySlice'

export const store = configureStore({
  reducer: {
    counterSlice,
    categorySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
