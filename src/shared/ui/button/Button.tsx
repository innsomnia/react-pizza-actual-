import styles from './styles.module.scss'

interface typesOfButton {
  img?: string
  children: string
}

export const Button = ({ img, children }: typesOfButton) => {
  return (
    <button className={styles.button}>
      {img && <img src={img} alt={'image'} />}
      {children}
    </button>
  )
}
