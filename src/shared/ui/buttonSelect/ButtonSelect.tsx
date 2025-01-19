import { useState } from 'react'
import styles from './styles.module.scss'

interface typesOfButton {
  children: string
}

export const ButtonSelect = ({ children }: typesOfButton) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleClick = () => setIsFocused((prev) => !prev)

  return (
    <button className={`${styles.button} ${isFocused ? styles.focused : ''}`} onClick={handleClick}>
      {children}
    </button>
  )
}
