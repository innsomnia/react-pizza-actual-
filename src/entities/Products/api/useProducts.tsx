import axios from 'axios'
import { useEffect, useState } from 'react'
import { TypeOfBeforeParse, TypeOfPizza } from '../model/types'

export const useProducts = () => {
  const [data, setData] = useState<TypeOfPizza[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6793ae705eae7e5c4d8f8cb2.mockapi.io/items')

        const parsedData = response.data.map((item: TypeOfBeforeParse) => ({
          ...item,
          types: JSON.parse(item.types),
          sizes: JSON.parse(item.sizes),
        }))

        setData(parsedData)
      } catch (error) {
        console.log(error, 'Возникшая ошибка')
      }
    }
    fetchData()
  }, [])

  return { data }
}
