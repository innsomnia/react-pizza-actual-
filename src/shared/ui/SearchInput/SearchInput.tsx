import styles from './styles.module.scss'

import searchImg from '/forHeader/searchImg.svg'

export const SearchInput = () => {
  return (
    <div className={styles.headerInput}>
      <img src={searchImg} alt='' />
      <input type='text' placeholder='Поиск пиццы...' />
    </div>
  )
}
