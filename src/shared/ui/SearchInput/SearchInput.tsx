import { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'

import searchImg from '/forHeader/searchImg.svg'

interface SearchInputProps {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
  return (
    <div className={styles.headerInput}>
      <img src={searchImg} alt='' />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type='text'
        placeholder='Поиск пиццы...'
      />
    </div>
  )
}
