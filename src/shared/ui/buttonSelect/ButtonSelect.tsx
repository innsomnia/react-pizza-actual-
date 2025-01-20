import { useState } from 'react'
import styles from './styles.module.scss'

interface typesOfButton {
  children: string
}

export const ButtonSelect = ({ children }: typesOfButton) => {
  const [isFocused, setIsFocused] = useState(0)

  const handleClick = (id: number) => {
    setIsFocused(id)
  }

  return (
    <button onClick={() => handleClick(0)} className={isFocused === 0 ? styles.focused : styles.button}>
      {children}
    </button>
  )
}
