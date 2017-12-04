import { RUN_SQLQUERY } from '../constants'

export function runSqlQuery(query) {
  return {
    type: RUN_SQLQUERY,
    callAPI: {
      url: '/api/sqlQuery/run',
      data: {
        query: query
      }
    }
  }
}