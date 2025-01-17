import styles from './styles.module.scss'

export const Categories = () => {
  return (
    <div className={styles.container}>
      <h1>Все пиццы</h1>

      <div className={styles.listOfCategories}>
        <button>Все</button>
        <button>Мясные</button>
        <button>Острые</button>
        <button>Сладкие</button>
        <button>Вегетарианские</button>
        <button>С курицей</button>
        <button>Закрытые</button>
      </div>
    </div>
  )
}
