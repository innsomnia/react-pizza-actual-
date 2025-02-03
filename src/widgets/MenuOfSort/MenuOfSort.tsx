import { Categories } from '../../features'
import { PizzaSort } from '../../features'
import styles from './styles.module.scss'

interface propsForSorting {
  updateCategory: (id: number) => void
  selectNameSort: (id: number) => void
  sortListNames: string[]
  selectedSort: number
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuOfSort = ({
  updateCategory,
  selectNameSort,
  selectedSort,
  sortListNames,
  open,
  setOpen,
}: propsForSorting) => {
  return (
    <div className={styles.categoriesBox}>
      <Categories updateCategory={updateCategory} />
      <PizzaSort
        selectNameSort={(id) => selectNameSort(id)}
        sortListNames={sortListNames}
        selectedSort={selectedSort}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
