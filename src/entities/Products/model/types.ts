export interface TypeOfPizza {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export interface TypeOfBeforeParse {
  id: number
  imageUrl: string
  title: string
  types: string
  sizes: string
  price: number
  category: number
  rating: number
}
