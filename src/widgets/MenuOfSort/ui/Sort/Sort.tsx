import styles from './styles.module.scss'

export const Sort = () => {
  return (
    <div className={styles.sortBox}>
      <img src='/forSort.svg' alt='картинки нет' />

      <span>Сортировка по:</span>
      <select name='sort'>
        <option value='price'>цене</option>
        <option value='rating'>рейтингу</option>
        <option value='popularity'>популярности</option>
      </select>
    </div>
  )
}
