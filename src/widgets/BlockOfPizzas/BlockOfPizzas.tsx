import { PizzaCard } from '../../entities'
import { useProducts } from '../../entities/Products/api/useProducts'
import styles from './styles.module.scss'

export const BlockOfPizzas = () => {
  const { data: pizzas } = useProducts()

  return (
    <div className={styles.container}>
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}
