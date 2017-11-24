import React, { Component } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';

class TableDataForm extends Component {

  render() {
    const {tableData} = this.props

    function makeColumns(row) {
      return Object.keys(row).map((keyName, index) => (
                          <TableRowColumn key={ index }>                          
                            { row[keyName] }
                          </TableRowColumn>
                        ))
    }

    let a1 = Object.keys(tableData[0]).map((keyName, index) => (
                          <TableHeaderColumn key={ index }>
                            { keyName }
                          </TableHeaderColumn>
                        ))
    let tableTemplate = tableData.map((row, index) => (
                      <TableRow key={ index }>
                        {makeColumns(row)}
                      </TableRow>
                    ))
    return (<div>
              <Table>
                <TableHeader>
                  <TableRow>
                    { a1 }
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableTemplate}
                </TableBody>
              </Table>
            </div>)
  }
}

export default TableDataForm