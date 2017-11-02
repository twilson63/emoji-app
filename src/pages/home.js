import React from 'react'
import { Link } from 'react-router-dom'
import List from '../components/list'
import Add from '../components/add'
import { connect } from 'react-redux'
import { ADD_EMOJI, SET_NEW_EMOJI } from '../constants'
const Home = ({ emojis, newemoji, setNewEmoji, addEmoji }) => {
  return (
    <div>
      <Add value={newemoji} onChange={setNewEmoji} onSubmit={addEmoji} />
      <List emojis={emojis} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    emojis: state.emojis,
    newemoji: state.newemoji
  }
}

const mapActionsToProps = dispatch => {
  return {
    setNewEmoji: e =>
      dispatch({ type: SET_NEW_EMOJI, payload: e.target.value }),
    addEmoji: emoji => dispatch({ type: ADD_EMOJI, payload: emoji })
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(Home)
