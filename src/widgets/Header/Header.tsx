import { Button } from '../../shared/ui'
import { Logo } from '../../shared/ui'
import { SearchInput } from '../../shared/ui'
import styles from './styles.module.scss'

import loginImg from '/forHeader/loginMan.svg'
import cartImg from '/forHeader/btnCart.svg'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.headerContainer}>
      <Link to='/'>
        <Logo />
      </Link>
      <SearchInput />
      <div className={styles.btnGroup}>
        <Button img={loginImg}>Войти</Button>
        <Button onClick={() => navigate('/cart')} img={cartImg}>
          Корзина
        </Button>
      </div>
    </div>
  )
}
