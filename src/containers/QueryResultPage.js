import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableDataForm from '../components/TableDataForm'

class QueryResultPage extends Component {

  render() {
    const {queryResult, loaded} = this.props
    
    if(!loaded) return <h3>Haw no data</h3>

    return (<div>
              <TableDataForm tableData={ queryResult } />
            </div>
    );
  }

}

export default connect(
  ({querySQL}) => (
  {
    queryResult: querySQL.get('queryResult').get('result'),
    loaded: querySQL.get('queryResult').get('loaded')
  }
  )
)(QueryResultPage)
