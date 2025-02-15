import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../../features/CounterSlice/CounterSlice'
import categorySlice from '../../features/Categories/model/SetCategorySlice'
import sortSlice from '../../features/PizzaSort/model/setSortSlice'
import cartPizzasSlice from '../../features/AddToCart/model/setCartItem'

export const store = configureStore({
  reducer: {
    counterSlice,
    categorySlice,
    sortSlice,
    cartPizzasSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
