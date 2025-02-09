import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../../features/CounterSlice/CounterSlice'
import categorySlice from '../../features/Categories/model/SetCategorySlice'
import sortSlice from '../../features/PizzaSort/model/setSortSlice'

export const store = configureStore({
  reducer: {
    counterSlice,
    categorySlice,
    sortSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
