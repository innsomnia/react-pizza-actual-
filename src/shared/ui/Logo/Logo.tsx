import styles from './styles.module.scss'
import logo from '/forHeader/icons8-пицца-96 1.svg'

export const Logo = () => {
  return (
    <div className={styles.titleGroup}>
      <img src={logo} alt='картинки нет' />

      <div>
        <h1>REACT PIZZA</h1>
        <span>вкусней уже некуда</span>
      </div>
    </div>
  )
}
