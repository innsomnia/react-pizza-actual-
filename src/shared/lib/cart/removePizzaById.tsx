import { TypeOfPizza } from '../../../features/GetProducts/model/types'

export const removePizzaById = (id: number, pizzas: TypeOfPizza[]) => {
  const newArrPizzas = [...pizzas]

  return newArrPizzas.filter((pizza) => pizza.id !== id)
}
