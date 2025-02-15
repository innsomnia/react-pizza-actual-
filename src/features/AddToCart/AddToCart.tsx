import { useState } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store/Store'
import { setCartPizzasState } from './model/setCartItem'
import { TypeOfPizza } from '../GetProducts/model/types'
import { removePizzaById } from '../../shared/lib/cart/removePizzaById'

interface AddToCartProps {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  pizzas: TypeOfPizza[]
}

export const AddToCart = ({ id, pizzas }: AddToCartProps) => {
  const [pizzaCount, setPizzaCount] = useState(0)

  const cartState = useSelector((state: RootState) => state.cartPizzasSlice)
  const dispatch = useDispatch()

  const addPizzaById = (id: number) => {
    setPizzaCount((prev) => prev + 1)

    const pizzaForCart = id
    const foundedPizza = pizzas.find((pizza) => pizza.id === pizzaForCart)

    dispatch(setCartPizzasState([...cartState.pizzas, foundedPizza]))
  }

  const handleRemove = (id: number) => {
    const filteredCart = removePizzaById(id, cartState.pizzas)

    dispatch(setCartPizzasState(filteredCart))

    setPizzaCount((prev) => prev - 1)
  }

  return (
    <div>
      {pizzaCount > 0 ? (
        <button onClick={() => handleRemove(id)} className={styles.decrement}>
          -
        </button>
      ) : null}
      <button onClick={() => addPizzaById(id)} className={styles.add}>
        Добавить
        <span>{pizzaCount}</span>
      </button>
    </div>
  )
}
