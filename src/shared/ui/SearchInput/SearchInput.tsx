import { Dispatch, SetStateAction, useRef } from 'react'
import deleteBtn from '../../../shared/assets/ButtonImgs/deleteBtn.svg'
import styles from './styles.module.scss'

import searchImg from '/forHeader/searchImg.svg'

interface SearchInputProps {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const clearInput = () => {
    setSearchValue('')
    inputRef.current?.focus()
  }

  return (
    <div className={styles.headerInput}>
      <img src={searchImg} alt='image' />
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type='text'
        placeholder='Поиск пиццы...'
      />
      {searchValue ? <img onClick={clearInput} className={styles.deleteBtn} src={deleteBtn} alt='image' /> : ''}
    </div>
  )
}
