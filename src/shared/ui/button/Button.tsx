import styles from './styles.module.scss'

import loginImg from '/forHeader/loginMan.svg'
// import cartImg from '/forHeader/btnCart.svg'

export const Button = () => {
  return (
    <div className={styles.btnGroup}>
      <button className={styles.login}>
        <img src={loginImg} alt='картинки нет' />
        <span>Войти</span>
      </button>
    </div>
  )
}
