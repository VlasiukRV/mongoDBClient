import { Map } from 'immutable'

import { RUN_SQLQUERY, START, SUCCESS, FAIL, CHANGE_SQLQUERY } from '../constants'

import { changeEntityValue } from '../utils/arrays'
import { getErrorMessage } from '../utils/util'

const defauQueryResult = new Map({
  result: {},
  loading: false,
  loaded: false,
})
const defaultState = new Map({
  sqlQuery: '',
  error: false,
  message: '',
  queryResult: defauQueryResult
})

export default (state = defaultState, action) => {
  const {type, response, error} = action

  switch (type) {
  case CHANGE_SQLQUERY:
    return state.set('error', false)
  case RUN_SQLQUERY + START:
		return state.set('queryResult', changeEntityValue(defauQueryResult, {'loading': true}))
  case RUN_SQLQUERY + SUCCESS: {
    let queryResult = defauQueryResult
          .set('loaded', response.data.length != 0)
          .set('result', response.data);
    if(response.status != 200){
      queryResult = queryResult
          .set('error', true)
      state = state
          .set('error', true)
          .set('message', response.message)
    }
    return state
          .set('queryResult', queryResult)
          .set('error', false)
    }
  case RUN_SQLQUERY + FAIL:
    return state
          .set('queryResult', defauQueryResult)          
          .set('error', true)        
          .set('message', getErrorMessage(error))
    
  }

  return state
}