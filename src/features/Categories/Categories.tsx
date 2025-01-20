import { useState } from 'react'
import styles from './styles.module.scss'

export const Categories = () => {
  const [classIndex, setClassIndex] = useState(0)

  const handleClassName = (id: number) => {
    setClassIndex(id)
  }

  return (
    <div className={styles.container}>
      <h1>Все пиццы</h1>

      <div className={styles.listOfCategories}>
        <button onClick={() => handleClassName(0)} className={classIndex === 0 ? styles.active : styles.button}>
          Все
        </button>
        <button onClick={() => handleClassName(1)} className={classIndex === 1 ? styles.active : styles.button}>
          Мясные
        </button>
        <button onClick={() => handleClassName(2)} className={classIndex === 2 ? styles.active : styles.button}>
          Острые
        </button>
        <button onClick={() => handleClassName(3)} className={classIndex === 3 ? styles.active : styles.button}>
          Сладкие
        </button>
        <button onClick={() => handleClassName(4)} className={classIndex === 4 ? styles.active : styles.button}>
          Вегетарианские
        </button>
        <button onClick={() => handleClassName(5)} className={classIndex === 5 ? styles.active : styles.button}>
          С курицей
        </button>
        <button onClick={() => handleClassName(6)} className={classIndex === 6 ? styles.active : styles.button}>
          Закрытые
        </button>
      </div>
    </div>
  )
}
