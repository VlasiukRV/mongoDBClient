import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AppPageHome from './AppPageHome'
import AppPageSignUp from '../containers/AppPageSignUp'
import AppPageLogin from '../containers/AppPageLogin'
import UserSecurityScoreHistory from '../containers/UserSecurityScoreHistory'
import Insurance from '../containers/Insurance'

export default class AppRoute extends Component {

  render() {
    return <div className='contant'>
             <Switch>
               <Route exact path='/' component={ AppPageHome } />
               <Route path='/signup' component={ AppPageSignUp } />
               <Route path='/login' component={ AppPageLogin } />
               <Route path='/score/coverage' component={ Insurance } />
               <Route path='/score/index' component={ UserSecurityScoreHistory } />
             </Switch>
           </div>
  }

}