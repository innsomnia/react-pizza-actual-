import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
