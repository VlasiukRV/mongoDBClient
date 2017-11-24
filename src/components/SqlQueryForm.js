import React, { Component } from 'react'
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SqlQueryForm extends Component {

  render() {
    const {sqlQuery, onSubmit, onChange, messages, error} = this.props

    return (<div>
              <Card>
                <form onSubmit={ onSubmit }>
                  <h2 className='card-heading'>SQL query</h2>
                  <div className='field-line'>
                    <TextField floatingLabelText='sql query' name='sqlQuery' onChange={ onChange } value={ sqlQuery } multiLine={ true } rows={15} rowsMax={15}
                    />
                  </div>
                  <div>
                    <RaisedButton type='submit' label='run query' primary />
                  </div>
                  { messages }
                  { error }
                </form>
              </Card>
            </div>)
  }
}

export default SqlQueryForm