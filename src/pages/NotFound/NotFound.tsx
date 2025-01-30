import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <h1>Данная страница не найдена </h1>
      <span>😞</span>
      <p>Перейдите на главную страницу</p>
      <button onClick={() => navigate('/')} className={styles.backBtn}>
        Перейти
      </button>
    </div>
  )
}
