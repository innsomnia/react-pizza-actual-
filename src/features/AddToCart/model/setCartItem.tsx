import { createSlice } from '@reduxjs/toolkit'
import { TypeOfPizza } from '../../GetProducts/model/types'

interface CartPizzasState {
  pizzas: TypeOfPizza[]
}

const initialState: CartPizzasState = {
  pizzas: [],
}

export const cartPizzasSlice = createSlice({
  name: 'cartPizzas',
  initialState,
  reducers: {
    setCartPizzasState(state, action) {
      state.pizzas = action.payload
    },
  },
})

export const { setCartPizzasState } = cartPizzasSlice.actions

export default cartPizzasSlice.reducer
