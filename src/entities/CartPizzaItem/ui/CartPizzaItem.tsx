import styles from './styles.module.scss'
import minusBtn from '../../../shared/assets/ButtonImgs/minusBtn.svg'
import plusBtn from '../../../shared/assets/ButtonImgs/plusBtn.svg'
import deleteBtn from '../../../shared/assets/ButtonImgs/deleteBtn.svg'

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
        <button>
          <img src={minusBtn} alt='image' />
        </button>
        <span> 2 </span>
        <button>
          <img src={plusBtn} alt='image' />
        </button>
      </div>
      <span className={styles.price}> {price} ₽ </span>
      <button onClick={() => removeOnePizza(id)} className={styles.deleteBtn}>
        <img src={deleteBtn} alt='image' />
      </button>
    </div>
  )
}
