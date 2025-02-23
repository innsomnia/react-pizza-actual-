import styles from './styles.module.scss'
import minusBtn from '../../../shared/assets/ButtonImgs/minusBtn.svg'
import plusBtn from '../../../shared/assets/ButtonImgs/plusBtn.svg'
import deleteBtn from '../../../shared/assets/ButtonImgs/deleteBtn.svg'
import { RootState } from '../../../app/store/Store'
import { useDispatch, useSelector } from 'react-redux'
import { deletePizzaItem, pizzaAdd } from '../../../features/AddToCart/model/setCartSlice'

interface CartPizzaItem {
  id: number
  key: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  removeOnePizza: (id: number) => void
}

export const CartPizzaItem = ({ id, title, imageUrl, price, removeOnePizza }: CartPizzaItem) => {
  const pizzaCount = useSelector((state: RootState) => state.cartPizzasSlice.pizzaCountById)
  const dispatch = useDispatch()

  return (
    <div className={styles.pizzaItem}>
      <div className={styles.containerForParameters}>
        <img src={imageUrl} alt='image' />
        <div className={styles.parameters}>
          <p>{title}</p>
          <span>тонкое тесто, 26 см.</span>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={() => removeOnePizza(id)}>
          <img src={minusBtn} alt='image' />
        </button>
        <span> {pizzaCount[id]} </span>
        <button onClick={() => dispatch(pizzaAdd(id))}>
          <img src={plusBtn} alt='image' />
        </button>
      </div>
      <span className={styles.price}> {price} ₽ </span>
      <button onClick={() => dispatch(deletePizzaItem(id))} className={styles.deleteBtn}>
        <img src={deleteBtn} alt='image' />
      </button>
    </div>
  )
}
