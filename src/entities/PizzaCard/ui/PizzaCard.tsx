import styles from './styles.module.scss'
import { ButtonSelect } from '../../../shared/ui'
import { AddToCart } from '../../../features'

interface typesForPizzaCard {
  pizzaImg: string
}

export const PizzaCard = ({ pizzaImg }: typesForPizzaCard) => {
  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.img} src={pizzaImg} alt='Pizza' />
      <h4 className={styles.title}>Чизбургер-пицца</h4>
      <div className={styles.selector}>
        <ul>
          <ButtonSelect>тонкое</ButtonSelect>
          <ButtonSelect>традиционное</ButtonSelect>
        </ul>
        <ul>
          <ButtonSelect>26 см.</ButtonSelect>
          <ButtonSelect>30 см.</ButtonSelect>
          <ButtonSelect>40 см.</ButtonSelect>
        </ul>
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.price}>от 395 ₽</div>
        <AddToCart />
      </div>
    </div>
  )
}
