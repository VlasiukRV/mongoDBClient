import { combineReducers } from 'redux'

import errors from './errors'

import users from './querySQL'
import securityScore from './queryResult'

export default combineReducers({
  querySQL: sqlQuery,
  queryResult: queryResult
})