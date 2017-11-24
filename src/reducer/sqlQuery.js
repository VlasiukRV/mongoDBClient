import { Map } from 'immutable'

import { RUN_SQLQUERY, START, SUCCESS, CHANGE_SQLQUERY } from '../constants'

import { changeEntityValue } from '../utils/arrays'

const defauQueryResult = new Map({
  result: {},
  loading: false,
  loaded: false,
})
const defaultState = new Map({
  sqlQuery: '',
  error: false,
  messages: [],
  queryResult: defauQueryResult
})

export default (state = defaultState, action) => {
  const {type, response} = action

  switch (type) {
  case CHANGE_SQLQUERY:
    return state.set('error', false)
  case RUN_SQLQUERY + START:
		return state.set('queryResult', changeEntityValue(defauQueryResult, {'loading': true}))
  case RUN_SQLQUERY + SUCCESS: {
    console.info(response)
    let queryResult = defauQueryResult
          .set('loaded', true)
          .set('result', response.data);
    return state
          .set('queryResult', queryResult)
          .set('error', false)
    }  
  }

  return state
}