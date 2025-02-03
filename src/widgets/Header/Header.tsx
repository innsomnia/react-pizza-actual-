import { Button } from '../../shared/ui'
import { Logo } from '../../shared/ui'
import { SearchInput } from '../../shared/ui'
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import cartImg from '/forHeader/cartImg.svg'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.headerContainer}>
      <Link to='/'>
        <Logo />
      </Link>
      <SearchInput />
      <div className={styles.btnGroup}>
        <Button onClick={() => navigate('/cart')} img={cartImg}>
          Корзина
        </Button>
      </div>
    </div>
  )
}
