import styles from './styles.module.scss'

interface propsTypes {
  selectNameSort: (id: number) => void
  sortListNames: string[]
  selectedSort: number
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const PizzaSort = ({ selectNameSort, sortListNames, selectedSort, open, setOpen }: propsTypes) => {
  return (
    <div className={styles.sortBox}>
      <img src='/forSort.svg' alt='картинки нет' />
      <div className={styles.dropdown}>
        <span>Сортировка по:</span>
        <div onClick={() => setOpen((prev) => !prev)} className={styles.dropdownLabel}>
          {sortListNames[selectedSort]}
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
