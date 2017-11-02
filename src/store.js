import { createStore, combineReducers } from 'redux'
import { ADD_EMOJI, SET_NEW_EMOJI } from './constants'

import { cond, equals, always, T, append } from 'ramda'
export default createStore(
  combineReducers({
    emojis,
    newemoji
  })
)

function emojis(state = [], action) {
  return cond([
    [
      equals(ADD_EMOJI),
      () => {
        return append(action.payload, state)
      }
    ],
    [T, always(state)]
  ])(action.type)
}

function newemoji(state = '', action) {
  return cond([
    [equals(ADD_EMOJI), always('')],
    [
      equals(SET_NEW_EMOJI),
      () => {
        return action.payload
      }
    ],
    [T, always(state)]
  ])(action.type)
}
