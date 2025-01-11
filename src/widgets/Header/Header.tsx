import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleGroup}>
        <img src='/forHeader/icons8-пицца-96 1.svg' alt='картинки нет' />
        <div>
          <h1>REACT PIZZA</h1>
          <span>вкусней уже некуда</span>
        </div>
      </div>
      <div className={styles.headerInput}>
        <img src='/forHeader/searchImg.svg' alt='' />
        <input type='text' placeholder='Поиск пиццы...' />
      </div>

      <div className={styles.btnGroup}>
        <button className={styles.login}>
          <img src='/forHeader/loginMan.svg ' alt='картинки нет' />
          <span>Войти</span>
        </button>
        <button className={styles.cart}>
          <img src='/forHeader/btnCart.svg' alt='картинки нет' />
        </button>
      </div>
    </div>
  )
}
