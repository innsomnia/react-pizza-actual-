import { Categories } from '../widgets/Categories/Categories'
import { Header } from '../widgets/Header/Header'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Categories />
    </div>
  )
}

export default App
