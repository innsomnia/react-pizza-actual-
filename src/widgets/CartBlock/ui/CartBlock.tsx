import styles from './styles.module.scss'
import cartImg from '../../../shared/assets/ButtonImgs/cartImg.svg'
import cart from '../../../shared/assets/ButtonImgs/cart.svg'
import { CartPizzaItem } from '../../../entities/CartPizzaItem/ui/CartPizzaItem'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../../app/store/Store'
import { useDispatch, useSelector } from 'react-redux'
import { setCartPizzasState } from '../../../features/AddToCart/model/setCartItem'
import { removePizzaById } from '../../../shared/lib/cart/removePizzaById'

export const CartBlock = () => {
  const cartState = useSelector((state: RootState) => state.cartPizzasSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const sumOfPizzaPrice = cartState.pizzas.reduce((sumOfPizzaPrice, pizza) => sumOfPizzaPrice + pizza.price, 0)

  const clearingCart = () => {
    dispatch(setCartPizzasState([]))
  }

  const removeOnePizza = (id: number) => {
    const removedPizza = removePizzaById(id, cartState.pizzas)
    dispatch(setCartPizzasState(removedPizza))
  }

  return (
    <div className={styles.container}>
      <div className={styles.cartTitle}>
        <h1>
          <img src={cartImg} alt='image' />
          Корзина
        </h1>
        <button onClick={() => clearingCart()} className={styles.button}>
          <img src={cart} alt='image' />
          Очистить корзину
        </button>
      </div>
      <div className={styles.cartContent}>
        {cartState.pizzas.map((pizza, id) => (
          <CartPizzaItem
            key={id}
            id={pizza.id}
            price={pizza.price}
            title={pizza.title}
            sizes={pizza.sizes}
            types={pizza.types}
            imageUrl={pizza.imageUrl}
            removeOnePizza={removeOnePizza}
          />
        ))}
      </div>
      <div className={styles.sumOfCart}>
        <p>
          Всего пицц:
          <span> {cartState.pizzas.length} шт.</span>
        </p>
        <p>
          Сумма заказа:<span className={styles.price}> {sumOfPizzaPrice} ₽</span>
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={() => navigate('/')} className={styles.backBtn}>
          Вернуться назад
        </button>
        <button className={styles.payBtn}>Оплатить сейчас</button>
      </div>
    </div>
  )
}
