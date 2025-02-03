import axios from 'axios'
import { useEffect, useState } from 'react'
import { TypeOfPizza } from '../model/types'
import { PRODUCTS_API_URL } from '../url/config'

interface UseProductsProps {
  category: number
  sortProperties: string
}

export const useProducts = ({ category, sortProperties }: UseProductsProps) => {
  const [data, setData] = useState<TypeOfPizza[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(
          `${PRODUCTS_API_URL}?${category ? `category=${category}&` : ''}sortBy=${sortProperties}&order=asc`
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
