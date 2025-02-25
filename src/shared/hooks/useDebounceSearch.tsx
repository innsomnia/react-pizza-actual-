import { useEffect, useState } from 'react'

export const useDebounceSearch = <T,>(searchValue: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(searchValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchValue)
    }, delay ?? 2000)

    return () => {
      clearTimeout(handler)
    }
  }, [searchValue, delay])

  return debounceValue
}
