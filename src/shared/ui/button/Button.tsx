import styles from './styles.module.scss'

interface typesOfButton {
  text: string
  loginImg?: string
  cartImg?: string
}

export const Button = ({ ...props }: typesOfButton) => {
  const loginImg = props.loginImg
  const cartImg = props.cartImg
  const text = props.text

  return (
    <div className={styles.btnGroup}>
      <button className={styles.login}>
        {loginImg && <img src={loginImg} alt='loginIcon' />}
        {cartImg && <img src={cartImg} alt='cartIcon' />}
        {text && <span>{text}</span>}
      </button>
    </div>
  )
}
