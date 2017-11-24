import React, { Component } from 'react'

import SqlQueryPage from '../containers/SqlQueryPage'
import QueryResultPage from '../containers/QueryResultPage'

export default class AppPageHome extends Component {
  render() {
    return <div>
             <div>
               <SqlQueryPage />
               <QueryResultPage />
             </div>
           </div>
  }
}