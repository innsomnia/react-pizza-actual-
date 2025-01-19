import { PizzaCard } from './ui/PizzaCard'
import PizzaImgs from '../../shared/assets/PizzaImgs/images'

import styles from './styles.module.scss'

export const PizzasBlock = () => {
  return (
    <div className={styles.container}>
      <PizzaCard pizzaImg={PizzaImgs.cheeseBurger} />
      <PizzaCard pizzaImg={PizzaImgs.cheeseBurger} />
      <PizzaCard pizzaImg={PizzaImgs.cheeseBurger} />
    </div>
  )
}
