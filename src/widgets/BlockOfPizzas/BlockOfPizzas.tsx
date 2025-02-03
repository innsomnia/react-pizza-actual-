import { useEffect, useState } from 'react'
import { PizzaCard, PizzaSkeleton } from '../../entities'
import { useProducts } from '../../features'
import { TypeOfPizza } from './../../features/GetProducts/model/types'
import styles from './styles.module.scss'

interface PropsForPizzaBlock {
  category: number
  sortProperties: string
  searchValue: string
}

export const BlockOfPizzas = ({ category, sortProperties, searchValue }: PropsForPizzaBlock) => {
  const { data: pizzas, loading } = useProducts({ category, sortProperties })
  const [searchedPizzas, setSearchedPizzas] = useState<TypeOfPizza[]>([])

  useEffect(() => {
    const filtered = pizzas.filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))

    setSearchedPizzas(filtered)
  }, [pizzas, searchValue])

  return (
    <div className={styles.container}>
      {loading
        ? [...new Array(10)].map((_, id) => <PizzaSkeleton key={id} />)
        : searchedPizzas.map((pizza) => (
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
