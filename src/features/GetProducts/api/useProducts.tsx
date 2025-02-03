import axios from 'axios'
import { useEffect, useState } from 'react'
import { TypeOfPizza } from '../model/types'

interface propsTypes {
  category: number
  sortProperties: string
}

export const useProducts = ({ category, sortProperties }: propsTypes) => {
  const [data, setData] = useState<TypeOfPizza[]>([])
  const [loading, setLoading] = useState(false)

  console.log(sortProperties, 'sortProperties в useProducts')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(
          `https://6793ae705eae7e5c4d8f8cb2.mockapi.io/items?${
            category ? `category=${category}&` : ''
          }sortBy=${sortProperties}&order=asc`
        )
        setData(response.data)
      } catch (error) {
        console.log(error, 'Возникшая ошибка')
      }
      setLoading(false)
    }

    fetchData()
  }, [category, sortProperties])

  return { data, loading }
}
