import axios from 'axios'
import { useEffect, useState } from 'react'
import { TypeOfPizza } from '../model/types'
import { PRODUCTS_API_URL } from '../url/config'

interface UseProductsProps {
  category: number
  sortProperties: string
  page: number
}

export const useProducts = ({ category, sortProperties, page }: UseProductsProps) => {
  const [data, setData] = useState<TypeOfPizza[]>([])
  const [paginatedData, setPaginatedData] = useState<TypeOfPizza[]>([])
  const [loading, setLoading] = useState(false)

  const dataLimit = 10

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(
          `${PRODUCTS_API_URL}?${category ? `category=${category}&` : ''}sortBy=${sortProperties}&order=asc`
        )

        localStorage.setItem('pizzas', JSON.stringify(response.data))

        setData(response.data)
      } catch (error) {
        console.log(error, 'Возникшая ошибка')
      }

      setLoading(false)
    }

    const localStorageData = JSON.parse(localStorage.getItem('pizzas') || '[]')

    if (localStorageData.length > 0) {
      setData(localStorageData)
    } else {
      fetchData()
    }
  }, [category, sortProperties])

  useEffect(() => {
    const firstIndex = (page - 1) * dataLimit
    const lastIndex = firstIndex + dataLimit

    setPaginatedData(data.slice(firstIndex, lastIndex))
  }, [page, data])

  return { paginatedData, data, loading }
}
