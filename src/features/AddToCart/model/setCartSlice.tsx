import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeOfPizza } from '../../GetProducts/model/types'

interface CartPizzasState {
  pizzaCountById: Record<number, number>
  pizzas: TypeOfPizza[]
}

const initialState: CartPizzasState = {
  pizzaCountById: {},
  pizzas: [],
}

export const cartPizzasSlice = createSlice({
  name: 'cartPizzas',
  initialState,
  reducers: {
    setCartPizzasState(state, action) {
      state.pizzas = action.payload
    },
    pizzaAdd: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.pizzaCountById[id] = (state.pizzaCountById[id] || 0) + 1
    },
    pizzaRemove: (state, action: PayloadAction<number>) => {
      const id = action.payload

      if ((state.pizzaCountById[id] || 0) > 0) {
        state.pizzaCountById[id] = state.pizzaCountById[id] -= 1
      }
    },
    clearingPizzaCount: (state) => {
      if (Object.keys(state.pizzaCountById).length === 0) {
        return
      } else {
        state.pizzaCountById = {}
      }
    },
  },
})

export const { setCartPizzasState, pizzaAdd, pizzaRemove, clearingPizzaCount } = cartPizzasSlice.actions

export default cartPizzasSlice.reducer
