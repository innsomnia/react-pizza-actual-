import { useEffect, useState } from 'react'
import { PizzaCard, PizzaSkeleton } from '../../entities'
import { useProducts } from '../../features'
import { TypeOfPizza } from './../../features/GetProducts/model/types'
import styles from './styles.module.scss'
import { BasicPagination } from '../../shared/ui/BasicPagination/BasicPagination'

interface PropsForPizzaBlock {
  searchValue: string
}

export const BlockOfPizzas = ({ searchValue }: PropsForPizzaBlock) => {
  const [page, setPage] = useState(1)
  const { paginatedData: pizzas, data, loading } = useProducts({ page })
  const [searchedPizzas, setSearchedPizzas] = useState<TypeOfPizza[]>([])

  const countOfPizzas = Math.ceil(data.length / 10)

  useEffect(() => {
    const filtered = pizzas.filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))

    setSearchedPizzas(filtered)
  }, [pizzas, searchValue])

  const handleChangePage = (_: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
      <div className={styles.paginationBlock}>
        {searchedPizzas.length > 0 ? (
          <BasicPagination countOfPizzas={countOfPizzas} handleChangePage={handleChangePage} page={page} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
