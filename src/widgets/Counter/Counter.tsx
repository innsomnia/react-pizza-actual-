import type { RootState } from '../../app/store/Store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/CounterSlice/CounterSlice'
import styles from './styles.module.scss'

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counterSlice.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          Увеличение
        </button>
        <span className={styles.span}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          Уменьшение
        </button>
      </div>
    </div>
  )
}
