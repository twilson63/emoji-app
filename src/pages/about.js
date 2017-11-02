import React from 'react'
import { Link } from 'react-router-dom'
import { emojify } from 'react-emojione'
const About = () => {
  return (
    <div className="pa4 avenir">
      <p>{emojify(':rocket:')}</p>
      <p>A way to manage your emoji list</p>
      <Link className="link tc" to="/">
        Return to Home
      </Link>
    </div>
  )
}

export default About
