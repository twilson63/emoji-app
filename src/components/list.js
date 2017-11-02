import React from 'react'
import { map } from 'ramda'
import { emojify } from 'react-emojione'
import { Link } from 'react-router-dom'

const li = emoji => {
  return (
    <li key={emoji} className="pl0 ml0 bb b--light-silver tc pv2">
      <Link to={`/${emoji}`} className="w-100  animated fadeInRight">
        {emojify(':' + emoji + ':')}
      </Link>
    </li>
  )
}

const List = ({ emojis }) => {
  return <ul className="pl0 ml0 list">{map(li, emojis)}</ul>
}

export default List
