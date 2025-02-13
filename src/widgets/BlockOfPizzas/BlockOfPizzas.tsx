import { useState } from 'react'
import { PizzaCard, PizzaSkeleton } from '../../entities'
import { useProducts } from '../../features'

import styles from './styles.module.scss'
import { BasicPagination } from '../../shared/ui/BasicPagination/BasicPagination'

interface PropsForPizzaBlock {
  searchValue: string
}

export const BlockOfPizzas = ({ searchValue }: PropsForPizzaBlock) => {
  const [page, setPage] = useState(1)
  const { paginatedData: pizzas, loading, searchedPizzas } = useProducts({ page, searchValue })

  const countOfPizzas = Math.ceil(searchedPizzas.length / 10)

  const handleChangePage = (_: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
      <div className={styles.paginationBlock}>
        {pizzas.length > 0 ? (
          <BasicPagination countOfPizzas={countOfPizzas} handleChangePage={handleChangePage} page={page} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
