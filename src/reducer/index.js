import { combineReducers } from 'redux'

import sqlQuery from './sqlQuery'
/*import queryResult from './queryResult'*/

export default combineReducers({
  querySQL: sqlQuery,
/*queryResult: queryResult*/
})