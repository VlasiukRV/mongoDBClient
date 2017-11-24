import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AppPageHome from './AppPageHome'

export default class AppRoute extends Component {

  render() {
    return <div className='contant'>
             <Switch>
               <Route exact path='/' component={ AppPageHome } />
             </Switch>
           </div>
  }

}