import React from 'react'

interface typesOfButton {
  children?: React.ReactNode
  pizzaType?: number
  key?: number
  idForType?: number
  idForSize?: number
  onClick: () => void
  className: string
}

export const Select = ({ children, onClick, className }: typesOfButton) => {
  return (
    <button onClick={onClick} className={className}>
      {<span>{children}</span>}
    </button>
  )
}
