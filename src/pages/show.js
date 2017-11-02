import React from 'react'
import { emojify } from 'react-emojione'
import { Link } from 'react-router-dom'
const Show = props => {
  return (
    <div className="h5 flex flex-column items-center justify-around">
      <div className="animated lightSpeedIn">
        {emojify(':' + props.match.params.emoji + ':')}
      </div>
      <Link className="avenir link" to="/">
        Return to Home
      </Link>
    </div>
  )
}

export default Show
