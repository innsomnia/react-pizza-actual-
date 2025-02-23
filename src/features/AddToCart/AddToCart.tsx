import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store/Store'
import { pizzaAdd, pizzaRemove, setCartPizzasState } from './model/setCartSlice'
import { TypeOfPizza } from '../GetProducts/model/types'

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
  const cartState = useSelector((state: RootState) => state.cartPizzasSlice)
  const pizzaCount = useSelector((state: RootState) => state.cartPizzasSlice.pizzaCountById)
  const dispatch = useDispatch()

  const addPizzaById = (id: number) => {
    const pizzaForCart = id
    const foundedPizza = pizzas.find((pizza) => pizza.id === pizzaForCart)
    const exists = cartState.pizzas.some((pizza) => pizza.id === id)

    if (!exists) {
      dispatch(setCartPizzasState([...cartState.pizzas, foundedPizza]))
      dispatch(pizzaAdd(id))
    } else {
      dispatch(pizzaAdd(id))
    }
  }

  const countBeforeAdding = 0

  const handleRemove = (id: number) => {
    dispatch(pizzaRemove(id))
  }

  return (
    <div>
      {pizzaCount[id] ?? countBeforeAdding > 0 ? (
        <button onClick={() => handleRemove(id)} className={styles.decrement}>
          -
        </button>
      ) : null}
      <button onClick={() => addPizzaById(id)} className={styles.add}>
        Добавить
        <span>{pizzaCount[id] ?? countBeforeAdding}</span>
      </button>
    </div>
  )
}
