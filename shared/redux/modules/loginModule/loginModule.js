import update from 'immutability-helper'

export const SHOW_LOGIN_POPUP = '@loginModule/SHOW_LOGIN_POPUP'
export const HIDE_LOGIN_POPUP = '@loginModule/HIDE_LOGIN_POPUP'
export const LOGGED_IN = '@loginModule/LOGGED_IN'

export const logIn = () => ({
  type: LOGGED_IN,
  data: true
})

export const logOut = () => ({
  type: LOGGED_IN,
  data: false
})

export const submitLoginForm = (event) => (dispatch, getState) => {
  // Handle reduxForm redirects
  if (event.preventDefault) {
    event.preventDefault()
  }

  return new Promise((resolve) => setTimeout(() => {
    dispatch(logIn())
  }, 2000))
}

const initialState = {
  showLoginPopup: false,
  isLoggedIn: false
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case SHOW_LOGIN_POPUP:
      return update(state, {
        showLoginPopup: {
          $set: true
        }
      })

    case HIDE_LOGIN_POPUP:
      return update(state, {
        showLoginPopup: {
          $set: false
        }
      })

    case LOGGED_IN:
      return update(state, {
        isLoggedIn: {
          $set: data
        }
      })

    default:
      return state
  }
}
