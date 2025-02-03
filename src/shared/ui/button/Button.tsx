import styles from './styles.module.scss'

interface typesOfButton {
  img?: string
  children: string
  onClick?: () => void
}

export const Button = ({ img, children, onClick }: typesOfButton) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {img && <img src={img} alt={'image'} />}
      <span>{children}</span>
    </button>
  )
}
