import { useState } from 'react'
import styles from './styles.module.scss'

interface categoriesContext {
  updateCategory: (id: number) => void
}

export const Categories = ({ updateCategory }: categoriesContext) => {
  const [classIndex, setClassIndex] = useState(0)

  const handleClassName = (id: number) => {
    setClassIndex(id)
    updateCategory(id)
  }

  const categoriesNames = ['Все', 'Мясные', 'Острые', 'Сладкие', 'Вегетарианские', 'С курицей', 'Закрытые']

  return (
    <div className={styles.container}>
      <h1>{categoriesNames[classIndex]} пиццы</h1>

      <div className={styles.listOfCategories}>
        {categoriesNames.map((text, id) => (
          <button
            key={id}
            onClick={() => handleClassName(id)}
            className={classIndex === id ? styles.active : styles.button}>
            {text}
          </button>
        ))}
      </div>
    </div>
  )
}
