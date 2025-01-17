import { Categories } from './ui/Categories/Categories'
import { Sort } from './ui/Sort/Sort'

import styles from './styles.module.scss'

export const MenuOfSort = () => {
  return (
    <div className={styles.categoriesBox}>
      <Categories />
      <Sort />
    </div>
  )
}
