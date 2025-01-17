import { Button } from '../../shared/ui/button'
import styles from './styles.module.scss'
import { Logo } from './ui/Logo/Logo'
import { SearchInput } from './ui/SearchInput/SearchInput'

import loginImg from '/forHeader/loginMan.svg'
import cartImg from '/forHeader/btnCart.svg'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <SearchInput />
      <div className={styles.btnGroup}>
        <Button text='Войти' loginImg={loginImg} />
        <Button text='Корзина' loginImg={cartImg} />
      </div>
    </div>
  )
}
