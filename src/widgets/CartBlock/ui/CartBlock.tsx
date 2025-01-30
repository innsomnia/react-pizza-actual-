import styles from './styles.module.scss'
import cartImg from '../../../shared/assets/ButtonImgs/cartImg.svg'
import cart from '../../../shared/assets/ButtonImgs/cart.svg'
import { CartPizzaItem } from '../../../entities/CartPizzaItem/ui/CartPizzaItem'

export const CartBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cartTitle}>
        <h1>
          <img src={cartImg} alt='image' />
          Корзина
        </h1>
        <button className={styles.button}>
          <img src={cart} alt='image' />
          Очистить корзину
        </button>
      </div>
      <div className={styles.cartContent}>
        <CartPizzaItem />
        <CartPizzaItem />
        <CartPizzaItem />
        <CartPizzaItem />
      </div>
      <div className={styles.sumOfCart}>
        <p>
          Всего пицц:<span> 3 шт.</span>
        </p>
        <p>
          Сумма заказа:<span className={styles.price}> 900 ₽</span>
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.backBtn}>Вернуться назад</button>
        <button className={styles.payBtn}>Оплатить сейчас</button>
      </div>
    </div>
  )
}
