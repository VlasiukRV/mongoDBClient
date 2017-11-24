import React, { Component } from 'react'
import { connect } from 'react-redux'

import SqlQueryForm from '../components/SqlQueryForm';
import { runSqlQuery } from '../actions/sqlQuery'

class SqlQueryPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sqlQuery: 'SELECT   amount , customer  ,  description FROM payment  WHERE;',
      error: false,
      messages: []
    }

    this.processForm = this.processForm.bind(this)
    this.changeSqlQuery = this.changeSqlQuery.bind(this)
  }

  changeSqlQuery(event) {
    event.preventDefault()

    const sqlQuery = event.target.value

    this.setState({
      sqlQuery
    });

  }

  processForm(event) {
    event.preventDefault()

    this.props.runSqlQuery(this.state.sqlQuery)
  }

  render() {

    return (<div>
              <SqlQueryForm sqlQuery={ this.state.sqlQuery } onSubmit={ this.processForm } onChange={ this.changeSqlQuery } messages={ this.state.messages } error={ this.state.error }
              />
            </div>
    );
  }

}

export default connect(null, {
  runSqlQuery
})(SqlQueryPage)
