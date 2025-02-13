import { useState, useEffect } from 'react'
import { TypeOfPizza } from '../../features/GetProducts/model/types'

interface DebounceProps {
  data: TypeOfPizza[]
  page: number
  setSearchedPizzas: (filtered: TypeOfPizza[]) => void
  searchValue: string
}

export const useDebounceSearch = ({ data, setSearchedPizzas, searchValue, page }: DebounceProps) => {
  const [timer, setTimer] = useState<number | null>(null)

  useEffect(() => {
    if (timer) clearTimeout(timer)

    const newTimer = setTimeout(() => {
      const filtered = data.filter((pizza) =>
        pizza.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
      )

      setSearchedPizzas(filtered)
    }, 2000)

    setTimer(newTimer)

    return () => clearTimeout(newTimer)
  }, [searchValue, data, page])
}
