import { useState } from 'react'
import { BlockOfPizzas, Header, MenuOfSort } from '../widgets'
import { Counter } from '../widgets/Counter/Counter'

export const Home = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <MenuOfSort />
      <BlockOfPizzas searchValue={searchValue} />
      <Counter />
    </>
  )
}
