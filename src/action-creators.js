import { SET_EMOJIS } from './constants'

import fetch from 'isomorphic-fetch'

const url = 'http://localhost:5000/emojis'

export const addEmoji = emoji => async (dispatch, getState) => {
  // headers, method, body
  const headers = {
    'Content-Type': 'application/json'
  }
  const method = 'POST'
  const body = JSON.stringify({ emoji })
  // do our fetch
  const result = await fetch(url, { headers, method, body }).then(res =>
    res.json()
  )

  if (result.ok) {
    dispatch(setEmojis)
  } else {
    // handle Error
  }
}

export const setEmojis = async (dispatch, getState) => {
  const emojis = await fetch(url).then(res => res.json())
  dispatch({ type: SET_EMOJIS, payload: emojis })
}
