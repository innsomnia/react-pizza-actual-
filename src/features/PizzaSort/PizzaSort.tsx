import { useState } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store/Store'
import { setSort } from './model/setSortSlice'

export const PizzaSort = () => {
  const [open, setOpen] = useState(false)

  const sortId = useSelector((state: RootState) => state.sortSlice.sortId)
  const sortListNames = useSelector((state: RootState) => state.sortSlice.sortListNames)

  const dispatch = useDispatch()

  const selectNameSort = (id: number) => {
    dispatch(setSort(id))
    setOpen(false)
  }

  return (
    <div className={styles.sortBox}>
      <img src='/forSort.svg' alt='картинки нет' />
      <div className={styles.dropdown}>
        <span>Сортировка по:</span>
        <div onClick={() => setOpen((prev) => !prev)} className={styles.dropdownLabel}>
          {sortListNames[sortId]}
        </div>
        <ul className={open ? styles.activeDropdownMenu : styles.dropdownMenu}>
          {sortListNames.map((name, id) => (
            <li onClick={() => selectNameSort(id)} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
