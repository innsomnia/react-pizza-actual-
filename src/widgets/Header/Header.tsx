import { Button } from '../../shared/ui'
import { Logo } from '../../shared/ui'
import { SearchInput } from '../../shared/ui'
import styles from './styles.module.scss'

import loginImg from '/forHeader/loginMan.svg'
import cartImg from '/forHeader/btnCart.svg'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <SearchInput />
      <div className={styles.btnGroup}>
        <Button img={loginImg}>Войти</Button>
        <Button img={cartImg}>Корзина</Button>
      </div>
    </div>
  )
}
