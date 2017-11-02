import React from 'react'
import { emojify } from 'react-emojione'

const Header = ({ title }) => {
  return (
    <header className="flex items-center justify-between bg-purple white avenir animated zoomInDown">
      <div className="ml2 animated flip infinite">{emojify(':star:')}</div>
      <h1 className="tracked ttu">{title}</h1>
      <div className="mr2 animated flip infinite">{emojify(':star:')}</div>
    </header>
  )
}

export default Header
