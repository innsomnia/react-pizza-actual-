import { useState } from 'react'
import styles from './styles.module.scss'

export const PizzaSort = () => {
  const namesOfSort = ['популярности', 'цене', 'алфавиту']
  const [open, setOpen] = useState(false)
  const [selectedName, setSelectedName] = useState(namesOfSort[0])

  const selectName = (id: number) => {
    setSelectedName(namesOfSort[id])
    setOpen(!open)
  }

  return (
    <div className={styles.sortBox}>
      <img src='/forSort.svg' alt='картинки нет' />
      <div className={styles.dropdown}>
        <span>Сортировка по:</span>
        <div onClick={() => setOpen(!open)} className={styles.dropdownLabel}>
          {selectedName}
        </div>
        <ul className={open ? styles.activeDropdownMenu : styles.dropdownMenu}>
          {namesOfSort.map((name, id) => (
            <li onClick={() => selectName(id)} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
