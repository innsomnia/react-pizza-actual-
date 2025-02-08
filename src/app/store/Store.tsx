import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../../features/CounterSlice/CounterSlice'
import categorySlice from '../../features/Categories/model/SetCategorySlice'

console.log('categorySlice', categorySlice)

export const store = configureStore({
  reducer: {
    counterSlice,
    categorySlice,
  },
})

console.log(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
