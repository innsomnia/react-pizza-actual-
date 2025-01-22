import { PizzaCard } from '../../entities'
import { pizzaData } from '../../entities'
import styles from './styles.module.scss'

export const BlockOfPizzas = () => {
  return (
    <div className={styles.container}>
      {pizzaData.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}
