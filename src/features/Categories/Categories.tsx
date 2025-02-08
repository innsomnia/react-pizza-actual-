import { useState } from 'react'
import { RootState } from '../../app/store/Store'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from './model/SetCategorySlice'
import styles from './styles.module.scss'

// interface updateCategoryProps {
//   updateCategory: (id: number) => void
// }

export const Categories = () => {
  const categoryId = useSelector((state: RootState) => state.categorySlice.categoryId)
  const dispatch = useDispatch()

  const [classIndex, setClassIndex] = useState(0)

  const handleClassName = (id: number) => {
    setClassIndex(id)
    dispatch(setCategoryId(id))
  }

  const categoriesNames = ['Все', 'Мясные', 'Острые', 'Сладкие', 'Вегетарианские', 'С курицей', 'Закрытые']

  return (
    <div className={styles.container}>
      <h1>{categoriesNames[categoryId]} пиццы</h1>

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
