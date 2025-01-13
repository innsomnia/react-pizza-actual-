import styles from './styles.module.scss'

export const Categories = () => {
  return (
    <div className={styles.container}>
      <h1>Все пиццы</h1>
      <div className={styles.categoriesBox}>
        <ul className={styles.listOfCategories}>
          <li>
            <button>Все</button>
          </li>
          <li>
            <button>Мясные</button>
          </li>
          <li>
            <button>Острые</button>
          </li>
          <li>
            <button>Сладкие</button>
          </li>
          <li>
            <button>Вегетарианские</button>
          </li>
          <li>
            <button>С курицей</button>
          </li>
          <li>
            <button>
              Еще
              <img src='/Arrow.svg' alt='картинки нет' />
            </button>
          </li>
        </ul>
        <div className={styles.sortBox}>
          <img src='/forSort.svg' alt='картинки нет' />

          <span>Сортировка по:</span>
          <select name='sort'>
            <option value='price'>цене</option>
            <option value='rating'>рейтингу</option>
            <option value='popularity'>популярности</option>
          </select>
        </div>
      </div>
    </div>
  )
}
