import styles from './styles.module.scss'

interface typesOfButton {
  pizzaType?: number
  children?: string
  size?: number
  key?: number
  idForType?: number
  idForSize?: number
  isSelected: boolean
  onClick: () => void
}

export const ButtonSelect = ({ children, size, onClick, isSelected }: typesOfButton) => {
  return (
    <button onClick={onClick} className={isSelected ? styles.focused : styles.button}>
      {children}
      {size && <span>{size + ' см.'}</span>}
    </button>
  )
}
