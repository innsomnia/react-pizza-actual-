import axios from 'axios'
import { useEffect, useState } from 'react'
import { TypeOfPizza } from '../model/types'
import { PRODUCTS_API_URL } from '../url/config'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store/Store'
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch'

interface UseProductsProps {
  page: number
  searchValue: string
}

export const useProducts = ({ page, searchValue }: UseProductsProps) => {
  const category = useSelector((state: RootState) => state.categorySlice.categoryId)
  const sortProperties = useSelector((state: RootState) => state.sortSlice.sortListProperties)
  const sortId = useSelector((state: RootState) => state.sortSlice.sortId)
  const selectedProperty = sortProperties[sortId]

  const [data, setData] = useState<TypeOfPizza[]>([])
  const [paginatedData, setPaginatedData] = useState<TypeOfPizza[]>([])
  const [searchedPizzas, setSearchedPizzas] = useState<TypeOfPizza[]>([])
  const [loading, setLoading] = useState(false)

  useDebounceSearch({ data, page, setSearchedPizzas, searchValue })

  const dataLimit = 10

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(
          `${PRODUCTS_API_URL}?${category ? `category=${category}&` : ''}sortBy=${selectedProperty}&order=asc`
        )

        localStorage.setItem('pizzas', JSON.stringify(response.data))

        setData(response.data)
      } catch (error) {
        console.warn(error, 'Возникшая ошибка')
      }

      setLoading(false)
    }

    fetchData()

    const getFromLocalStorage = localStorage.getItem('pizzas')

    try {
      const localStorageData = getFromLocalStorage ? JSON.parse(getFromLocalStorage) : []

      if (localStorageData.length > 0) {
        setData(localStorageData)
      } else {
        fetchData()
      }
    } catch (error) {
      console.warn('Произошла ошибка!', error)
    }
  }, [category, selectedProperty, sortId])

  useEffect(() => {
    const firstIndex = (page - 1) * dataLimit
    const lastIndex = firstIndex + dataLimit

    if (searchedPizzas.length === 0) {
      setPaginatedData(data.slice(firstIndex, lastIndex))
    } else {
      setPaginatedData(searchedPizzas.slice(firstIndex, lastIndex))
    }
  }, [page, data, searchValue, searchedPizzas])

  return { paginatedData, data, searchedPizzas, loading }
}
