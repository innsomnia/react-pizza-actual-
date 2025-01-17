import { Button } from '../../shared/ui/button'
import styles from './styles.module.scss'
import { Logo } from './ui/Logo/Logo'
import { SearchInput } from './ui/SearchInput/SearchInput'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <SearchInput />
      <div className={styles.btnGroup}>
        <Button />
        <Button />
      </div>
    </div>
  )
}
