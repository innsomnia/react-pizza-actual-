import axios from 'axios'
import { useEffect, useState } from 'react'
import { TypeOfPizza } from '../model/types'

export const useProducts = () => {
  const [data, setData] = useState<TypeOfPizza[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6793ae705eae7e5c4d8f8cb2.mockapi.io/items')

        setData(response.data)
      } catch (error) {
        console.log(error, 'Возникшая ошибка')
      }
    }
    fetchData()
  }, [])

  return { data }
}
