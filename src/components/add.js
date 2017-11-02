import React from 'react'

const Add = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(value)
      }}
      className="flex items-center justify-between mv2"
    >
      <input
        autoFocus
        value={value}
        onChange={onChange}
        className="ml2 w-70"
        placeholder="Add Fav Emoji"
      />
      <button className="mr2 w-20 hover-bg-purple b--light-silver bw0 bg-light-purple br2 white">
        Add
      </button>
    </form>
  )
}

export default Add
