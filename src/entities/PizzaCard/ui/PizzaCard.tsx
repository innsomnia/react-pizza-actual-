import styles from './styles.module.scss'
import { ButtonSelect } from '../../../shared/ui'
import { AddToCart } from '../../../features'
import { useState } from 'react'

interface typesForPizzaCard {
  key: number
  pizza: {
    id: number
    imageUrl: string
    title: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
  }
}

export const PizzaCard = ({ pizza }: typesForPizzaCard) => {
  const [selectedType, setSelectedType] = useState(pizza.types[0])
  const [selectedSize, setSelectedSize] = useState(pizza.sizes[0])

  const { title, imageUrl, types, sizes, price } = pizza

  const namesOfTypes = ['традиционное', 'тонкое']

  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.img} src={imageUrl} alt='Pizza' />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>
          {types.map((type, id) => (
            <ButtonSelect isSelected={selectedType === type} key={id} onClick={() => setSelectedType(type)}>
              {namesOfTypes[type]}
            </ButtonSelect>
          ))}
        </ul>
        <ul>
          {sizes.map((size, id) => (
            <ButtonSelect
              isSelected={selectedSize === size}
              key={id}
              size={size}
              onClick={() => setSelectedSize(size)}
            />
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
