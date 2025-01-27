import { PizzaCard, PizzaSkeleton } from '../../entities'
import { useProducts } from '../../features'
import styles from './styles.module.scss'

export const BlockOfPizzas = () => {
  const { data: pizzas, loading } = useProducts()

  return (
    <div className={styles.container}>
      {loading
        ? pizzas.map((pizza) => <PizzaSkeleton key={pizza.id} />)
        : pizzas.map((pizza) => (
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
