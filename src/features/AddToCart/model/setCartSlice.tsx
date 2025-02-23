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

      if (state.pizzaCountById[id]) {
        state.pizzaCountById[id] -= 1

        if (state.pizzaCountById[id] === 0) {
          delete state.pizzaCountById[id]
          state.pizzas = state.pizzas.filter((pizza) => pizza.id !== id)
        }
      }
    },
    deletePizzaItem: (state, action: PayloadAction<number>) => {
      const id = action.payload

      if (state.pizzaCountById[id] > 0) {
        state.pizzaCountById[id] = 0

        if (state.pizzaCountById[id] === 0) {
          delete state.pizzaCountById[id]
          state.pizzas = state.pizzas.filter((pizza) => pizza.id !== id)
        }
      }
    },
    clearingAllPizzasCount: (state) => {
      if (Object.keys(state.pizzaCountById).length === 0) {
        return
      } else {
        state.pizzaCountById = {}
      }
    },
  },
})

export const { setCartPizzasState, pizzaAdd, pizzaRemove, clearingAllPizzasCount, deletePizzaItem } =
  cartPizzasSlice.actions

export default cartPizzasSlice.reducer
