import React, { Component } from 'react'

import UserSecurityScore from '../containers/UserSecurityScore'
import UserNotifications from '../containers/UserNotifications'
import UserDevices from '../containers/UserDevices'
import Errors from '../containers/Errors'

export default class AppPageHome extends Component {
  render() {
    return <div>
             <div>
               <UserSecurityScore />
             </div>
           </div>
  }
}