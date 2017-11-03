import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ADD_EMOJI, SET_NEW_EMOJI, SET_EMOJIS } from './constants'

import { cond, equals, always, T, append } from 'ramda'
export default createStore(
  combineReducers({
    emojis,
    newemoji
  }),
  applyMiddleware(thunk)
)

function emojis(state = [], action) {
  return cond([
    [
      equals(SET_EMOJIS),
      () => {
        return action.payload
      }
    ],
    [T, always(state)]
  ])(action.type)
}

function newemoji(state = '', action) {
  return cond([
    [equals(SET_EMOJIS), always('')],
    [
      equals(SET_NEW_EMOJI),
      () => {
        return action.payload
      }
    ],
    [T, always(state)]
  ])(action.type)
}
