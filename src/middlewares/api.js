import $ from 'jquery'
import { START, SUCCESS, FAIL } from '../constants'
import { THROW_ERROR } from '../constants'
import { isAuthenticated } from '../utils/authentification'

export default ( /*store*/ ) => next => action => {
  const {checkAuthenticated, callAPI, type, ...rest} = action
  if (!callAPI) return next(action)

  let authenticated = true;
  if (checkAuthenticated) {
    authenticated = isAuthenticated()
  }

  next({
    type: type + START,
    ...rest
  })

  if (authenticated) {
    $.get(callAPI)
      .done(response => next({
        type: type + SUCCESS,
        response,
        ...rest
      }))
      .fail(error => next({
        type: type + FAIL,
        error,
        ...rest
      }))
  } else {
    const error = {
      errorType: 401,
      msg: 'Unauthorized.'
    }
    next({
      type: THROW_ERROR,
      error: error,
      ...rest
    })

    next({
      type: type + FAIL,
      ...rest
    })
  }
}