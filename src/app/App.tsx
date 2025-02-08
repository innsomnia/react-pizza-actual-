import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { store } from './store/Store.tsx'
import { Provider } from 'react-redux'
import styles from './styles.module.scss'

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
