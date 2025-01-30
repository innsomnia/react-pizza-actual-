import styles from './styles.module.scss'
import pizza from '../../../shared/assets/examplePizza.png'
import minusBtn from '../../../shared/assets/ButtonImgs/minusBtn.svg'
import plusBtn from '../../../shared/assets/ButtonImgs/plusBtn.svg'
import deleteBtn from '../../../shared/assets/ButtonImgs/deleteBtn.svg'

export const CartPizzaItem = () => {
  return (
    <div className={styles.pizzaItem}>
      <div className={styles.containerForParameters}>
        <img src={pizza} alt='image' />
        <div className={styles.parameters}>
          <p>Сырный цыпленок</p>
          <span>тонкое тесто, 26 см.</span>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button>
          <img src={minusBtn} alt='image' />
        </button>
        <span>2</span>
        <button>
          <img src={plusBtn} alt='image' />
        </button>
      </div>
      <span className={styles.price}> 770 ₽ </span>
      <button className={styles.deleteBtn}>
        <img src={deleteBtn} alt='image' />
      </button>
    </div>
  )
}
