import { Categories } from '../../features'
import { PizzaSort } from '../../features'
import styles from './styles.module.scss'

export const MenuOfSort = () => {
  return (
    <div className={styles.categoriesBox}>
      <Categories />
      <PizzaSort />
    </div>
  )
}
