import { PizzaCard } from '../../entities'
import { useProducts } from '../../features'
import styles from './styles.module.scss'

export const BlockOfPizzas = () => {
  const { data: pizzas } = useProducts()

  return (
    <div className={styles.container}>
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          title={pizza.title}
          imageUrl={pizza.imageUrl}
          types={pizza.types}
          sizes={pizza.sizes}
          price={pizza.price}
        />
      ))}
    </div>
  )
}
