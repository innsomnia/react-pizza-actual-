import { TypeOfPizza } from '../../../features/GetProducts/model/types'

export const removePizzaById = (id: number, pizzas: TypeOfPizza[]) => {
  return pizzas.filter((pizza) => pizza.id !== id)
}
