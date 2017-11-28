import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableDataForm from '../components/TableDataForm'

class QueryResultPage extends Component {

  render() {
    const { error, message, tableData, loaded } = this.props
    
    return (<div>
            <div className='information-block result-query-form'>              
              <TableDataForm tableData={ tableData } loaded={ loaded } error={ error } message={ message }/>
            </div>
            </div>
    );
  }

}

export default connect(
  ({querySQL}) => (
  {
    error: querySQL.get('error'),
    message: querySQL.get('message'),
    tableData: querySQL.get('queryResult').get('result'),
    loaded: querySQL.get('queryResult').get('loaded')
  }
  )
)(QueryResultPage)
