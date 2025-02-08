import { Categories } from '../../features'
import { PizzaSort } from '../../features'
import styles from './styles.module.scss'

interface propsForSorting {
  selectNameSort: (id: number) => void
  sortListNames: string[]
  selectedSort: number
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuOfSort = ({ selectNameSort, selectedSort, sortListNames, open, setOpen }: propsForSorting) => {
  return (
    <div className={styles.categoriesBox}>
      <Categories />
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
