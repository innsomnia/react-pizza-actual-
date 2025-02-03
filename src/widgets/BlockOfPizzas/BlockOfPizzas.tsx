import { PizzaCard, PizzaSkeleton } from '../../entities'
import { useProducts } from '../../features'
import styles from './styles.module.scss'

interface categoryProps {
  category: number
  sortProperties: string
}

export const BlockOfPizzas = ({ category, sortProperties }: categoryProps) => {
  const { data: pizzas, loading } = useProducts({ category, sortProperties })

  return (
    <div className={styles.container}>
      {loading
        ? [...new Array(10)].map((_, id) => <PizzaSkeleton key={id} />)
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
