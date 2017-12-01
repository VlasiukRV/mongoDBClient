import React, { Component } from 'react'
import { Card } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';

class TableDataForm extends Component {

  render() {
    return (<div>
              <Card>
                <div>
                  <h2 className='card-heading'>Result query</h2>
                  { this.getBody() }
                </div>
              </Card>
            </div>)
  }

    getValueRepresentation(object) {
      if (typeof (object) == 'object') {
        return Object.keys(object).map((keyName) => (
          object[keyName] + ' '
        ))
      }
      return object;
    }

    makeColumns(row) {
      return Object.keys(row).map((keyName, index) => (
        <TableRowColumn key={ index }>
          { this.getValueRepresentation(row[keyName]) }
        </TableRowColumn>
      ))
    }

    getBody() {
      const { error, message, loaded, tableData } = this.props

      if (loaded && !error) {

        const tableHeader = Object.keys(tableData[0]).map((keyName, index) => (
          <TableHeaderColumn key={ index }>
            { keyName }
          </TableHeaderColumn>
        ))

        const tableTemplate = tableData.map((row, index) => (
          <TableRow key={ index }>
            { this.makeColumns(row) }
          </TableRow>
        ))

        return (<div>
                  <Table height = { '200px' } selectable={ false }>
                    <TableHeader>
                      <TableRow>
                        { tableHeader }
                      </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={ true } stripedRows={ true } displayRowCheckbox = { false }>
                      { tableTemplate }
                    </TableBody>
                  </Table>
                </div>)
      } else {
        if(error)
        return (<div>
                  { message }
                </div>)
      }
    }

}

export default TableDataForm