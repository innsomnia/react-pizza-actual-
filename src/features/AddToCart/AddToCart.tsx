import { useState } from 'react'
import styles from './styles.module.scss'

export const AddToCart = () => {
  const [pizzaCount, setPizzaCount] = useState(0)

  const handleCountClick = () => {
    setPizzaCount((prev) => prev + 1)
  }
  return (
    <button onClick={handleCountClick} className={styles.add}>
      Добавить
      <span>{pizzaCount}</span>
    </button>
  )
}
