import { useState } from 'react'
import { BlockOfPizzas, Header, MenuOfSort } from '../widgets'

export const Home = () => {
  const sortListNames = ['популярности', 'цене', 'алфавиту']
  const sortListProperties = ['rating', 'price', 'title']
  const [category, setCategory] = useState(0)
  const [selectedSort, setSelectedSort] = useState(0)
  const [open, setOpen] = useState(false)

  const sortProperties = sortListProperties[selectedSort]

  const updateCategory = (id: number) => {
    setCategory(id)
  }

  const selectNameSort = (id: number) => {
    setSelectedSort(id)
    setOpen(false)
  }

  return (
    <>
      <Header />
      <MenuOfSort
        updateCategory={updateCategory}
        sortListNames={sortListNames}
        selectNameSort={(id) => selectNameSort(id)}
        selectedSort={selectedSort}
        setOpen={setOpen}
        open={open}
      />
      <BlockOfPizzas category={category} sortProperties={sortProperties} />
    </>
  )
}
