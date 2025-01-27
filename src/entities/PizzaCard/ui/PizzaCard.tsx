import styles from './styles.module.scss'
import classes from '../../../shared/ui/Select/styles.module.scss'
import { AddToCart } from '../../../features'
import { useState } from 'react'
import { Select } from '../../../shared/ui'

interface typesForPizzaCard {
  key: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
}

export const PizzaCard = ({ title, imageUrl, types, sizes, price }: typesForPizzaCard) => {
  const [selectedType, setSelectedType] = useState(types[0])
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const pizzaTypes = ['традиционное', 'тонкое']

  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.img} src={imageUrl} alt='Pizza' />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>
          {types.map((type) => (
            <Select
              className={selectedType === type ? classes.focused : classes.button}
              key={type}
              onClick={() => setSelectedType(type)}>
              {pizzaTypes[type]}
            </Select>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <Select
              className={selectedSize === size ? classes.focused : classes.button}
              key={size}
              onClick={() => setSelectedSize(size)}>
              {size} см.
            </Select>
          ))}
        </ul>
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.price}>от {price} ₽</div>
        <AddToCart />
      </div>
    </div>
  )
}
